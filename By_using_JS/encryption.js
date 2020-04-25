function solution(n, arr1, arr2) {
    const answer = [];

    for (var i = 0; i < n; i++) {
        let result_arr = arr1[i] | arr2[i];

        answer.push(result_arr.toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '));
    }
    return answer;
}