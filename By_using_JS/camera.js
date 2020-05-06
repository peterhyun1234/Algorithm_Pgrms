function solution(routes) {

    // 적어도 한번은 카메라 만나도록
    // route는 차량 경로
    // 최소 몇 대의 카메라를 설치해야하는 지

    var answer = 1;

    routes.sort(function(a, b) {
        return a[0] - b[0];
    });

    let tmp = routes[0][1];

    for (let i = 0; i < routes.length - 1; i++) {
        if (tmp > routes[i][1]) {
            tmp = routes[i][1];
        }
        if (tmp < routes[i + 1][0]) {
            answer += 1;
            tmp = routes[i + 1][1];
        }
    }

    return answer;
}