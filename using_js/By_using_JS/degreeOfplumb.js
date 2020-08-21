function solution(weight) {

    var answer = 0;

    var degreeOfplumb = weight.length;

    weight.sort(function(a, b) { return a - b; });

    var total = weight[0]; // 최소 추의 무게

    for (var a = 0; a < degreeOfplumb; a++) {
        if (total >= weight[a]) {
            total += weight[a];
        } else {
            break;
        }
    }
    answer = total;
    return answer;
}