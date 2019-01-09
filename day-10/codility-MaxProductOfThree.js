// Chapter 6 - Sorting
// Max Product of 3

// The key is to apply the sort function and multiply the top 3 numbers or check the ones at the bottom if there are negatives

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var maxProduct = 0;

    A.sort((a,b) => a-b);

    maxProduct = A[A.length - 1] * A[A.length -2] * A[A.length -3];

    var secondProduct = A[A.length - 1] * A[0] * A[1];

    return Math.max(maxProduct, secondProduct);
}
