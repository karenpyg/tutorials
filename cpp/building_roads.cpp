#include <iostream>
#include <vector> 

using namespace std;

int N; 
vector<vector<int>> adj; 
vector<bool> visited; 
vector<int> rep; 

void dfs(int node)
{
    visited[node] = true; 
    for (int u: adj[node])
        if (!visited[u]) dfs(u);
}

int count_components()
{
    int count = 0; 
    for(int i = 1; i<=N; i++){
        if (!visited[i]){
            count ++; 
            rep.push_back(i);
            dfs(i);
        }
    }
    return count;

}

