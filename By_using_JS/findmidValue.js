function solution(s) {
    var answer = '';
    var temp = String(s).split("");

    //console.log(temp);
    var mid = Math.round(temp.length / 2);
    console.log(mid);

    if (temp.length % 2 == 1) {
        answer = temp[mid - 1];
    } else {
        answer = temp[mid - 1] + temp[mid];
    }

    return answer;
}