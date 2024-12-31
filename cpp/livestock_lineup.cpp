#include <bits/stdc++.h>

using namespace std;

const int RESTRICT_LEN = 6; 
const vector<string> COWS = {"Beatrice", "Belinda", "Bella",     "Bessie",
                             "Betsy",    "Blue",    "Buttercup", "Sue"};

vector<vector<string>> orderings; 
void build(vector<string> ordering){
    // finished building permutations 
    if ((int)(ordering.size()) == 8){
        orderings.push_back(ordering); 
        return; 
    }

    for (const string &COW: COWS){
        if (find(ordering.begin(), ordering.end(), COW) == ordering.end())
        {
            
        }
    }
}