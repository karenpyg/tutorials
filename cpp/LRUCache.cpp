#include <bits/stdc++.h>
using namespace std; 

class LRUCache{
    public: 
        class node{
            public: 
                int key; 
                int val;
                node* next;
                node* prev; 

                node(int key, int val){
                    this -> key = key; 
                    this -> val = val; 
                    this -> next = NULL; 
                    this -> prev = NULL;
                }
        };
    unordered_map<int, node*> mp; 
    int capacity; 

    /* to keep track of starting and ending point */
    node* head = new node(0, 0);
    node* tail = new node(0, 0);  

    LRUCache(int capacity){
        this -> capacity = capacity; 
        head -> next = tail; 
        tail -> prev = head; 

    }

    void insert(node* curr_node){
        curr_node -> next = head -> next; 
        head -> next -> prev = curr_node; 
        head -> next = curr_node; 
        curr_node -> prev = head; 
        mp[curr_node -> key] = curr_node; //updating the hash table
    }   

    void remove(node* curr_node){
        mp.erase(curr_node -> key);
        curr_node -> prev -> next = curr_node -> next; 
        curr_node -> next -> prev = curr_node -> prev; 

    }

    int get(int key){
        // returns -1 if key is not present in the cache 
        if (mp.find(key) == mp.end()){
            return -1; 
        }
        node* curr_node = mp[key]; 
        remove(curr_node);
        insert(curr_node);
        return curr_node -> val; 
    }

    int put(int key, int val){
        // when key is already present in the cache but we wanna update, 
        // so will remove now and add it in the end
        if (mp.find(key) != mp.end()){
            remove(mp[key]);
        }
        // cache is full, must remove least recently used val
        if (mp.size() == capacity){
            remove(tail -> prev); 
        }
        insert(new node(key, val)); 
    }
}; 
