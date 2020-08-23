#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int red) {

    int len = brown / 2 + 2;

    int width = len - 3;
    int height = 3;

    while(width >= height){
        if(width * height == (brown + red)) break;

        width--;
        height++;
    }
    answer = {width, height};
    return answer;
}