#include <bits/stdc++.h>
using namespace std;

int depth(const Tree& T, const Position& p){
    if (p.is_root())
        return 0; 
    else 
        return 1 + depth(T, p.parent()); 
}

void preorder(const Tree& T, const Position& p ){
    cout << *p ; 
    position_list ch = p.children();
    for (iterator q = ch.begin; q !=ch.end(); ++q){
        cout << " " ; 
        preorder(T, *q); 
    }
}

