// 시간 초과!!!!!
function solution(participant, completion) {

    let lengOfparti = participant.length;
    let index;
    let hash = [];
    let finded = {};

    for (let i = 0; i < lengOfparti; i++) {
        finded = participant[i];
        index = completion.findIndex(function(item) { return item === finded; });

        console.log(index);

        if (index === -1) {
            return finded;
        } else {
            if (hash.findIndex(function(item) { return item === index }) != -1) {
                return finded;
            } else {
                hash[i] = index;
            }
        }
    }
}


// 남 코드 ;; ㄷㄷ
function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}