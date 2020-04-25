// 이거 속도 탈락
function solution(n, stations, w) {
    var answer = 0;
    let parts = stations.length + 1;
    let border = 2 * w + 1;
    let boundary = 0;

    for (let i = 0; i < parts; i++) {
        if (i == 0) {
            if ((stations[0] - w) <= 1) {
                // parts 없음
                console.log("first");
                continue;
            } else {
                boundary = stations[0] - w - 1;
            }
        } else if (i == (parts - 1)) {
            //console.log(stations[i-1]);
            if ((stations[i - 1] + w) >= n) {
                //console.log("final");
                // parts 없음
                continue;
            } else {
                boundary = n - (stations[parts - 1] + w);
            }
        } else {
            boundary = (stations[i] - w) - (stations[i - 1] + w) - 1;
        }

        //console.log(i + ": " + boundary);

        while (true) {
            if (boundary > border) {
                boundary -= border;
                answer++;
            } else {
                answer++;
                break;
            }
        }
        console.log(i + ": " + answer);

    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')

    return answer;
}