#include <bits/stdc++.h>
using namespace std;

const int N=3; 
const int rep=100; 

int main(){
    vector <int> cap={}; 
    vector <int>avail={}; 
    for(int i=0; i<rep; i++){
        int khali=cap[i%3 +1] - avail[i%3 +1]; 
        if(avail[i%3]> khali){
            avail[i%3]-= khali;
            avail[i%3+1]+= khali; 
        }
        if(avail[i%3]<=khali){
            avail[i%3+1]+= avail[i%3];
            avail[i%3]=0; 
        }
    }
    for(int m:avail){ cout << m << endl; }
}