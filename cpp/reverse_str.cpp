#include <bits/stdc++.h>
#include <vector>
using namespace std;

// class Solution {
// public:
//     bool isPalindrome(string s) {
//         int start=0; 
//         int end = s.size()-1 ;
//         while ( start <=end){
//             if(!alnum(s[start])){start ++; continue;}
//             if(!alnum(s[end])){ end -- ; continue; }
//             if (tolower(s[start]) != tolower(s[end])) return false; 
//             else{
//                 start ++; 
//                 end --; 
//             }
//         }
//         return true;
//     }
// };

// class Solution {
// public:
//     ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
//         stack<int> s1, s2;

//         while (l1 != nullptr) {
//             s1.push(l1->val);
//             l1 = l1->next;
//         }

//         while (l2 != nullptr) {
//             s2.push(l2->val);
//             l2 = l2->next;
//         }

//         int totalSum = 0, carry = 0;
//         ListNode* ans = new ListNode();
//         while (!s1.empty() || !s2.empty()) {
//             if (!s1.empty()) {
//                 totalSum += s1.top();
//                 s1.pop();
//             }
//             if (!s2.empty()) {
//                 totalSum += s2.top();
//                 s2.pop();
//             }

//             ans->val = totalSum % 10;
//             carry = totalSum / 10;
//             ListNode* newNode = new ListNode(carry);
//             newNode->next = ans;
//             ans = newNode;
//             totalSum = carry;
//         }

//         return carry == 0 ? ans->next : ans;
//     }
// };
#define BITFLAG_EXAMPLE_1 0x00000001
#define BITFLAG_EXAMPLE_2 0x00000002
#define BITFLAG_EXAMPLE_3 0x00000004

vector<vector<int>> findNumberOfLIS(vector<int>& nums) {
    vector<vector<int>> all;
    for(int i=0; i<nums.size(); i++){
        vector<int> a;
        for (int j=i+1; j<nums.size(); j++){
            // cout << nums[j] << nums[j-1] << endl; 
            if(nums[j]> nums[j-1]){
                a.push_back(nums[j]);
            }
            all.push_back(a); 
        }
    }
    // cout << all.size() << endl; 
    return all;
    
}

int main(){ 
    cout << "shalalhlad"<<endl;
    vector<int> zz= {1,3,8,4,5,7};
    auto b = findNumberOfLIS(zz);
    for (const auto& i: b){ 
        for(const auto& j: i){
            cout << j<< " "; 
        }
        cout << endl; 
    }
}