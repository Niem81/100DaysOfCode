// Chapter 6 - sorting
// Triangle

// the first thought was to make a triple iteration, and besides it might get the right answer
// the performance would not be on the same page
// after watching to some tutorials, the idea was to sort, and limit the loop to minus 2 values
// in order to make the triple comparisson

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length <= 2) return 0;

    A.sort((a, b) => (a - b));

    for (var i = 0; i < A.length - 2; i++) {
        var p = A[i];
        var q = A[i + 1];
        var r = A[i + 2];

        if (p + q > r && q + r > p && r + p > q) return 1;
    }

    return 0;
}
