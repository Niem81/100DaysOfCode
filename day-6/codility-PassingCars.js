// Codility Chapter 5 - PassingCars

/*
Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
*/

// On first thought, included a nested for loop, could do the job to count all different pairs
// And get the number related to passing cars to opposite directions
// But in terms of TIME Complexity, it would not be efficient

// The solution I follow (not mine) was this one:
// https://github.com/janantala/codility/blob/master/Lesson%203%20%E2%80%93%20Prefix%20Sums/PassingCars.js

function solution(A) {
    var N = A.length;
    if(N<2) return 0;

    var zeros = 0;
  var sum = 0;

  for (var i=0; i<N; i++){
    if (A[i] === 0) {
      zeros++;
    }

    if (A[i] === 1) {
      sum += zeros;
    }
  }
  return (sum > 1000000000) ? -1 : sum;
}
