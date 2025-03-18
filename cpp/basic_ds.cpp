#include <bits/stdc++.h>
#include <vector> 

using namespace std; 

int main(){
    //initializer list
    vector<int> v_1 = {1,2,3,4,5}; 
    // Uniform initialization
    vector<int> v_2 {1,2,3,4,5}; 

    // Method 2
    vector<int> v_3(5, 0); 
    
    for (const int& i: v_1){
        cout << i << " "; 
    }




    return 0; 

}