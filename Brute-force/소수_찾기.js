// 이건 쉬운거 같으면서도 어려울거 같음.. ㅠ permutation 잘 익히기!!!
function solution(numbers) {

    var answer = 0;
    var n = numbers.split('');
    var nums = new Set();
    permutation(n, '');

    function permutation(a, s) {
        if (s.length > 0) {
            if (nums.has(Number(s)) === false) {
                nums.add(Number(s));
                console.log(Number(s))
                if (chkPrime(Number(s))) {
                    answer++;
                }
            }
        }
        if (a.length > 0) {
            for (var i = 0; i < a.length; i++) {
                var t = a.slice(0)
                t.splice(i, 1);
                console.log(t, s + a[i]);
                permutation(t, s + a[i]);
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    return answer;
}