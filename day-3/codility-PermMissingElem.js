

function solutionWith40Over100Correctness(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length <= 0) {
        return 1;
    } else if(A.length <= 1){
        return A[0]+1;
    }
    if(Math.max(...A) <= 0){
        return 1;
    }
    for(var i=1; i<A.length+1; i++){
        if(!A.includes(i)){
            return i;
        }
    }
}

// right solution

function solution(A) {
  var asum = 0;
  var n = A.length + 1;
  var sum = n * (n + 1) / 2;

  for (var i=0; i<A.length; i++){
    asum += A[i];
  }

  return sum - asum;
}
