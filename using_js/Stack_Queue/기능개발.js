function solution(progresses, speeds) {

    let answer = [];
    let remainderDay = [];

    let currentFunc;

    let wait = 1;

    for (let i = 0; i < progresses.length; i++) {
        remainderDay.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    console.log(remainderDay);

    currentFunc = remainderDay[0];

    for (let j = 1; j < progresses.length; j++) {

        if (currentFunc > remainderDay[j]) {
            wait++;
        } else {
            currentFunc = remainderDay[j]
            answer.push(wait);
            wait = 1;
        }
        if (j === progresses.length - 1) {
            answer.push(wait);
        }
    }
    return answer;
}