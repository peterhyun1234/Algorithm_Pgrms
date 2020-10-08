#include <string>
#include <vector>

using namespace std;

int solution(int n) 
{
    int answer = 0;

    vector<int> dp(n+1, 0);

    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    int idx = 3;
    while ( idx < n + 1 )
    {
        dp[idx] = ( dp[idx - 1] + dp[idx - 2] ) % 1000000007;
        ++idx;
    }

    answer = dp[idx - 1] ;

    return answer;
}