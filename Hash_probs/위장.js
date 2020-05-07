function solution(clothes) {
    let answer = 1;
    let obj = {};
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1; //obj를 처음 접근할 경우 다 1로 초기화
    }

    console.log(obj);

    for (let key in obj) {
        answer *= obj[key];
    }

    return answer - 1;
}