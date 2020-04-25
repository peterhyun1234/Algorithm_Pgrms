function solution(triangle) {
    var answer = 0;
    // DFS  
    for (let i = 1; i < triangle.length; i++) {
        triangle[i][0] += triangle[i - 1][0];
        triangle[i][i] += triangle[i - 1][i - 1];
        for (let j = 1; j < i; j++)
            triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }

    var answer = Math.max.apply(null, triangle[triangle.length - 1]);
    console.log(answer);

    return answer;

}