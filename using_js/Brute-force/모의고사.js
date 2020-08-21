function solution(answers) {
    let answer = [];

    let person = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    let tempArray = [];

    let personScore = [];

    let score = 0;

    let degreeOfprobs = answers.length;

    let patternLen;
    let cnt = 0;

    for (let i = 0; i < person.length; i++) {
        patternLen = person[i].length;

        for (let j = 0; j < degreeOfprobs; j++) {
            if (patternLen === cnt) {
                cnt = 0;
            }

            if (answers[j] === person[i][cnt]) {
                score += 1;
            }

            cnt++
        }
        personScore.push(score);
        cnt = 0;
        score = 0;
    }

    let max = personScore[0];

    //console.log(personScore);
    for (let a = 0; a < 3; a++) {
        if (max < personScore[a]) {
            max = personScore[a];
        }
    }
    //max = Math.max(count[0], count[1], count[2]); 다음엔 Math.max사용하기

    for (let b = 0; b < 3; b++) {
        if (max == personScore[b]) {
            answer.push(b + 1);
        }
    }

    return answer;
}