function solution(numbers) {
    let answer = '';

    let temp1 = numbers.map(c => c + ''); //Stringfying

    let temp2 = temp1.sort((a, b) => {
        return (b + a) - (a + b);
    });

    let temp3 = temp2.join('');

    answer = String(temp3);
    return answer[0] === '0' ? '0' : answer;
}