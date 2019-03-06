// Chapter 7 - Fish


// First attemp
// Score: 37 % https://app.codility.com/demo/results/training5TMEBD-NUU/
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    var i = 0;
    var remainingFishes = [];

    var equalDirection = B.every((val, i, arr) => val === arr[0]);
    if(equalDirection) return B.length;

    var equalSize = A.every((val, i, arr) => val === arr[0]);
    if(equalSize) return A.length;

    remainingFishes.push(0);

    for (i=1; i<A.length; i++) {
        var currentFish = i;
        var lastFish = remainingFishes.pop();

        if(B[lastFish] === 0 || B[currentFish] === 1){
            remainingFishes.push(lastFish);
            remainingFishes.push(currentFish);
        } else if(B[lastFish] === 1 && B[currentFish] === 0){
            if(A[currentFish] > A[lastFish]){
                remainingFishes.push(currentFish);
            } else if (A[lastFish] > A[currentFish]) {
                remainingFishes.push(lastFish);
            }
        }

    }

    return remainingFishes.length;
}
