#include <bits/stdc++.h>

using namespace std;

int N;
vector<bool> visited; 
vector<vector<int>> adj; 
vector<int> rep; 
void dfs(int node){
    visited[node] = true;
    for(int n: adj[node]){
        if(!visited[n])
            dfs(n); 
    }
}

int count_components(vector<bool>){
    int count = 0; 
    for(int i=1; i<N; i++){
        if(!visited[i]){
            count ++; 
            rep.push_back(i); 
            dfs(i); 
        }
    }
    return count;

}
