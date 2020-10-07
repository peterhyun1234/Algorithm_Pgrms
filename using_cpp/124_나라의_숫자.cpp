// 124 나라에는 자연수만 존재합니다
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.

#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

string solution(int n) {
    string answer = "";
    int share = n;
    int remainder = -1;
    
    while (share!=0) {
        remainder = share % 3;
        share = share / 3;

        if (remainder == 0) { //나누어 떨어질 경우 몫을 1빼준다.
            answer = "4" + answer;
            share--;
        }
        else if (remainder == 1) {
            answer = "1" + answer;
        }
        else if (remainder == 2) {
            answer = "2" + answer;
        }
    }

    return answer;
}

int main(){
    int n = 3;

    string answer = solution(n);

    cout << answer << "\n";

    return 0;
}