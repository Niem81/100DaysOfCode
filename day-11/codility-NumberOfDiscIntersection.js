// Chapter 6 - Sorting
// NumberOfDiscIntersections

// 68% task score because of 33% performance
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    var keys = Object.keys(A);
    var pairs = 0;

    for(var j=0; j<A.length - 1; j++){
        var current = A[j];
        var currentMin = parseInt(keys[j]) - current;
        var currentMax = parseInt(keys[j]) + current;

        for(var i=j+1; i<A.length; i++){

            var next = A[i];
            var nextMin = parseInt(keys[i]) - next;
            var nextMax = parseInt(keys[i]) + next;

            if(currentMax < nextMin) break;

            if (nextMin <= currentMin && currentMin <= nextMax) {
                pairs += 1;
            } else if(nextMax >= currentMax && nextMax <= currentMax) {
                pairs += 1;
            } else if(nextMin >= currentMin && nextMin <= currentMax) {
                pairs += 1;
            } else if(nextMax >= currentMin && nextMax <= currentMax) {
                pairs += 1;
            }

            if(pairs > 10000000) return -1;
        }
    }
    return pairs;
}
