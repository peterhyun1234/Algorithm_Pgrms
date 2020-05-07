function solution(array, commands) {
    let answer = [];

    let tempArray = [];
    let cnt = 0;

    for (let a = 0; a < commands.length; a++) {
        if ((commands[a][1] - commands[a][0]) < 1) {
            answer.push(array[commands[a][0] - 1]);
        } else {
            for (let i = commands[a][0] - 1; i < commands[a][1]; i++) {
                //console.log(array[i]);
                //tempArray.push(array[i]);
                tempArray[cnt] = array[i];
                cnt++;
            }
            cnt = 0;
            tempArray.sort((a, b) => {
                return a - b;
            });

            console.log(tempArray);

            answer.push(tempArray[commands[a][2] - 1]);

        }


        //console.log(tempArray);
        tempArray = [];
    }


    return answer;
}

// 참고적으로 slice를 사용하면 코드를 대폭 줄일 수 있음!!
function solution(array, commands) {

    // console.log(array);
    // console.log(commands);

    var result = [];

    var temp;
    for (var i = 0; i < commands.length; i++) {

        temp = array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b) {
            return a - b;
        })

        result.push(temp[commands[i][2] - 1]);

    }

    return result;

}