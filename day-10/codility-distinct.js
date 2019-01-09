// From Sorting chapter
// Distinct Exercise

// my solution with 83% on task score
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length <= 0) return 0;
    if (A.length == 1) return 1;

    var distinctValues = 1;
    var comparingValue = A[0];
    var seenValues = [];

    for(var i = 1; i<A.length; i++){
        if(comparingValue != A[i] && !seenValues.includes(A[i])){
            seenValues.push(A[i]);
            distinctValues += 1;
        }
    }

    return distinctValues;

}

// other solution from: https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/Distinct.md

function solution(A) {
    var map = {};
    for (var i in A) {
        if (!map[A[i]]) {
            map[A[i]] = true;
        }
    }
    return Object.keys(map).length;
}
