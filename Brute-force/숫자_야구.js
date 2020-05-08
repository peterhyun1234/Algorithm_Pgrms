function solution(baseball) {
    var answer = []

    // 123~987 완전 탐색
    for (var i = 123; i <= 987; i++) {
        const number = String(i)
        if (
            number.charAt(0) == number.charAt(1) ||
            number.charAt(1) == number.charAt(2) ||
            number.charAt(2) == number.charAt(0) ||
            number.indexOf('0') > 0
        )
            continue

        // check가 true로 남아있으면 모든 조건을 만족하는 것
        var check = true

        // baseball 배열의 조건 모두 탐색
        for (var j = 0; j < baseball.length; j++) {
            var countStrike = 0
                // 현재 baseball 배열의 숫자의 모든 자릿수 비교 (strike)
            for (var k = 0; k < 3; k++) {
                if (number.charAt(k) === String(baseball[j][0]).charAt(k)) countStrike++
            }

            if (countStrike !== baseball[j][1]) {
                check = false
                break
            }

            var countBall = 0
                // 현재 baseball 배열의 숫자의 모든 자릿수 비교 (ball)
            for (var k = 0; k < 3; k++) {
                if (number.indexOf(String(baseball[j][0]).charAt(k)) >= 0) countBall++
            }

            // 위의 조건에서 중복되는 strike의 수를 빼줘야함.  
            if (countBall - countStrike !== baseball[j][2]) {
                check = false
                break
            }
        }
        if (check) answer.push(i)
    }

    return answer.length
}


// 이게 더 직관적인 듯! 완전 탐색!@@@

function solution(baseball) {
    var answer = 0;

    // 서로 다른 3개의 수 조합. 
    for (let i = 123; i <= 987; i++) {
        let [x, y, z] = (i + "").split('');

        // 각 수의 범위는 1~9 
        if (x === "0" || y === "0" || z === "0") continue;
        if (x === y || x === z || y === z) continue;

        for (let j = 0; j < baseball.length; j++) {
            let strike = 0;
            let ball = 0;

            const [query, query_s, query_b] = baseball[j];
            const [query_x, query_y, query_z] = (query + "").split('');
            if (query_x === "0" || query_y === "0" || query_z === "0") break;
            if (query_x === query_y || query_x === query_y || query_y === query_z) break;

            if (x === query_x) strike++;
            if (y === query_y) strike++;
            if (z === query_z) strike++;
            if (query_s != strike) break;

            if ((x === query_y) || (x === query_z)) ball++;
            if ((y === query_x) || (y === query_z)) ball++;
            if ((z === query_x) || (z === query_y)) ball++;
            if (query_b != ball) break;

            if (j === baseball.length - 1) answer++;
        }
    }


    return answer;
}