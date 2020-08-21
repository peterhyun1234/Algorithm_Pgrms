function solution(citations) {
    let answer = 0;
    // h회 이상 h번 인용되면!

    citations.sort((a, b) => { return b - a; });

    //console.log(citations);

    for (let i = 0; i < citations.length - 1; i++) {
        if (((i + 1 <= citations[i]))) {
            answer = i + 1;
        }
    }

    return answer;
}