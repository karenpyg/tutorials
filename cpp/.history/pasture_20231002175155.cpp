#include <iostream>
#include <vector>

int N, M; 
vector<vector<int>> adj; 
vector<bool> visited; 

void dfs(int node){
    visited[node] = true; 
    for(u : adj[node]){
        if(!visited[node]){
            dfs(u); 
        }
    }
}