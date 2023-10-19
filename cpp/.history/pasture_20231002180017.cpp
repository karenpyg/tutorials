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

int count_components(int node){
    int count=0; 
    for(int i=1; i<=N; i++){
        if(!visited[i]){
            count ++; 
            dfs(i);
        }
    }
    return count; 
}