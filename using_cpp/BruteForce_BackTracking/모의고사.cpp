#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    
    vector<int> person_1 = {1,2,3,4,5};
    vector<int> person_2 = {2,1,2,3,2,4,2,5};
    vector<int> person_3 = {3,3,1,1,2,2,4,4,5,5};
    
    vector<int> score(3);
    for(int i=0; i<answers.size(); i++) {
        int cur_answer = answers[i];
        if(cur_answer == person_1[i % 5]) {
            score[0]++;
        }
        if(cur_answer == person_2[i % 8]) {
            score[1]++;
        }
        if(cur_answer == person_3[i % 10]) {
            score[2]++;
        }
    }

    int score_max = *max_element(score.begin(),score.end());

    for(int i = 0; i < 3; i++) {
        if(score[i] == score_max) answer.push_back(i+1);
    }
    
    return answer;
}