function solution(A, B) {
    var answer = 0;

    A.sort(function(a, b) { // 내림차순
        return b - a;
    });

    B.sort(function(a, b) { // 오름차순
        return a - b
    });

    console.log(A);
    console.log(B);

    for (var a = 0; a < A.length; a++) {
        answer += A[a] * B[a];
    }
    return answer;
}