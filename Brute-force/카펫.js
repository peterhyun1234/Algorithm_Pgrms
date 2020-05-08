function solution(brown, red) {
    let answer = [];

    let inner_width = 0;
    let inner_height = 0;

    for (let i = 1; i < red + 1; i++) {
        if (red % i === 0) {
            inner_height = i
            inner_width = red / inner_height;

            if ((2 * inner_height + 2 * inner_width + 4) === brown) {
                answer.push(inner_width + 2);
                answer.push(inner_height + 2);
                break;
            }
        }
    }

    return answer;
}