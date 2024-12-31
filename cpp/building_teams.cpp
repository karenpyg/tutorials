#include <bits/stdc++.h>
using namespace std; 

const int MN=10e5 +10; 

int main(){
    int N, M; 
    cin >> N >> M;
    vector<vector<int>> adj(M); 

    for (int i=0; i<N; i++){
        int u,v; cin >> u >> v ; 
        adj[--u].push_back(--v); adj[v].push_back(u); adj[--v].push_back(v);

        vector color(N, -1); 
        auto bfs = [&](int start){
            queue<pair<int, int>> todo; 
            todo.push({start, 0}); 

            while(!todo.empty()){
                pair<int, int> current=todo.front();
                todo.pop();

                color[current.first] = current.second;

                for(vector<int> u: adj[current.first]){
                    if (color[u.first]==-1){
                        todo.push({u.first, !u.second});
                    }
                }
            }
        }



    }


}