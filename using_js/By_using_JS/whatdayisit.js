function solution(a, b) {
    var monthsDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var answer = '';

    var days = b + 4;

    for (var i = 0; i < a - 1; i++)
        days += monthsDays[i];

    //var index = (days)%7;

    //answer = weekDays[index];    

    return weekDays[(days) % 7];
}