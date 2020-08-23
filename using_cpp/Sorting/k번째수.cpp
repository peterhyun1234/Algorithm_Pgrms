#include <string>
#include <vector>
#include <algorithm>


using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    int n = commands.size();
    for(int t = 0 ; t < n; t++){
        int i = commands[t][0];
        int j = commands[t][1];
        int k = commands[t][2];
        vector<int> temp_v;
        for(int a = i-1; a < j; a++){
            temp_v.push_back(array[a]);
        }
        sort(temp_v.begin(), temp_v.end());
        answer.push_back(temp_v[k-1]);
    }
    
    return answer;
}