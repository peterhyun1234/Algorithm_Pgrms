function solution(arrangement) {
    let result = 0;
    let stack = [];
    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] === "(") { // (은 무조건 push
            stack.push("(");
        } else { // )이 나오면 (를 하나 빼줌
            stack.pop();
            if (arrangement[i - 1] === "(") { // case1 : 레이저인 경우
                result += stack.length;
            } else { // case2 : 막대기 끝인 경우
                result += 1;
            }
        }
    }
    return result
}