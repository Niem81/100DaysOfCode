
// this solution is a copy from https://gist.github.com/lalkmim/e04845eb9d1c5936622a

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var leaves = [];
    var i = 0;
    var result = -1;
    if(!A || !X || Array.isArray(X)){
        return -1;
    }
    if (A.length == 0){
        return -1;
    }
    for(i=0; i<A.length; i++) {
        if(typeof leaves[A[i]] == 'undefined') {
            leaves[A[i]] = i;
        }
    }

    if(leaves.length <= X) {
        return -1;
    }

    for(i=1; i<=X; i++) {
        if(typeof leaves[i] == 'undefined') {
            return -1;
        } else {
            result = Math.max(result, leaves[i]);
        }
    }

    return result;
}

function otherSolution(X, A) {
    var leaves = [];
    var size = 0;

    for (var i=0; i<A.length; i++) {

      if (!leave[A[i]]){
        leaves[A[i]] = true;
        size++;
      }

      if (size === X) {
        return i;
      }
    }
    return -1;
}
