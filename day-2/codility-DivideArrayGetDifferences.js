// array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts:
// A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of:
// |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

function solution(arr) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!Array.isArray(arr)){
        return false;
    }
    if(arr.length <= 0) return 0;
    if(arr.length == 1) return arr[0];

    var differences = [];
    for (var i = 1; i < arr.length; i++) {
        var array1 = arr.slice(0, i);
        var array2 = arr.slice(i, arr.length);

        var sum1 = array1.reduce((a, b) => a + b, 0);
        var sum2 = array2.reduce((a, b) => a + b, 0);
        var diff = Math.abs(sum1 - sum2);

        differences.push(diff);
    }
    return Math.min(...differences);
}
