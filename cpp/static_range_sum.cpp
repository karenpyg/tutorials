#include <bits/stdc++.h>
using namespace std;

#define sz(x) (int)size(x)

using ll = long long;
using vl = vector<ll>;

vector<long long> psum(const vector<long long> &a){
    vector<long long> res((int)size(a)+1); 
    for(int i=0; i<(int)size(a); ++i ) res[i+1] = res[i] + a[i]; 
    return res; 
}

