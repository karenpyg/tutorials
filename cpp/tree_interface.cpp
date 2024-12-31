// #include <bits/stdc++.h>
// using namespace std;

// int depth(const Tree& T, const Position& p){
//     if (p.is_root())
//         return 0; 
//     else 
//         return 1 + depth(T, p.parent()); 
// }

// void preorder(const Tree& T, const Position& p ){
//     cout << *p ; 
//     position_list ch = p.children();
//     for (iterator q = ch.begin; q !=ch.end(); ++q){
//         cout << " " ; 
//         preorder(T, *q); 
//     }
// }

#include <bits/stdc++.h>
using namespace std ; 


int N, M;
vector<vector<int>> adj(N); 
vector<int> visited(N, 0); 
vector distance(N, 0);

int main(){
    cin >> N >> M; 
    int start; cin>> start; 

    for(int i=0; i<M; i++){
        int u, v;cin >> u >> v; 
        adj[u].push_back(v);adj[v].push_back(u); 
    }
    queue<int> q;
    if(!visited[start]){
        visited[start]=1;
        q.push(start);
    }

    while(!q.empty()){
        int current= q.front();
        q.pop();

        for(int u: adj[current]){
            if(!visited[u]){
                visited[u]=1;
                q.push(u);
            }
            distance[u] += 1; 

        }

    }
}   