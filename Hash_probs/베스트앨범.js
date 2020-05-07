function solution(genres, plays) {
    var answer = [];

    // 장르 별 총 수
    let genrMap = genres.reduce((acc, cur, idx) => {
        if (!acc[cur]) acc[cur] = { totalPlays: 0, list: [] };
        acc[cur].list.push(idx);
        acc[cur].totalPlays += plays[idx];
        return acc;
    }, {});

    // 장르 당 2순위
    let genrSort = Object.keys(genrMap).sort(function(a, b) {
        return genrMap[b].totalPlays - genrMap[a].totalPlays;
    });


    genrSort.forEach((cur) => {

        let list = genrMap[cur].list.sort(function(a, b) {
            return plays[b] - plays[a];
        });

        //console.log(list);

        list.some(function(cur, idx) {
            if (idx > 1) { //두개만..
                return true;
            }
            answer.push(cur);

            //console.log(cur + ": " + idx);
        });
    });


    return answer;
}