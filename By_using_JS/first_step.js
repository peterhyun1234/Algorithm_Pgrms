function solution(dirs) {

    var answer = 0;

    let way_Array = new Array();
    let wayInfo = new Object();

    wayInfo.x_start = 0;
    wayInfo.y_start = 0;
    wayInfo.x_end = 0;
    wayInfo.y_end = 0;

    let vertex = [0, 0];

    let commands_len = dirs.length;

    for (let i = 0; i < commands_len; i++) {

        wayInfo.x_start = vertex[0];
        wayInfo.y_start = vertex[1];

        if (dirs[i] == "U") {
            vertex[1]++;
        } else if (dirs[i] == "D") {
            vertex[1]--;
        } else if (dirs[i] == "R") {
            vertex[0]++;
        } else { // L
            vertex[0]--;
        }

        wayInfo.x_end = vertex[0];
        wayInfo.y_end = vertex[1];
        way_Array.push(wayInfo);
    }

    console.log(way_Array);

    return answer;
}