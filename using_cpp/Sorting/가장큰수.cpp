#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(string a, string b){
    return a+b > b+a;
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> number_strs;
    
    int n = numbers.size();
    for(int i =0; i < n ; i ++){
        number_strs.push_back(to_string(numbers[i]));
    }
    sort(number_strs.begin(), number_strs.end(), cmp);
    
    for(int i =0; i < n ; i ++){
        answer += number_strs[i];
        //cout << number_strs[i] << "\n";
    }
    
    if(number_strs[0] == "0") answer = "0";
    
    return answer;
}