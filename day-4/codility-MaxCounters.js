// Codility Get max counters in Array - MaxCounters - Chapter 4

// My first solution : https://app.codility.com/demo/results/trainingM6KMBM-KKA/
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counters = new Array(N);
    for (var i=0; i<N; i++){
        counters[i] = 0;
    }

    if(A.length < 1) {
        return counters;
    }

    for(var i=0; i<A.length; i++){
        if(A[i] >= 1 && A[i] <= N){
            counters[A[i]-1] += 1;
        } else if(A[i] == (N+1)) {
            var maxValueCounter = Math.max(...counters);
            counters = counters.map(function(counter){
                return maxValueCounter;
            });
        }
    }

    return counters;
}

// final solution: https://app.codility.com/demo/results/training28JGPT-ZKQ/
// copy from https://app.codility.com/demo/results/trainingQ3KEC6-S4T/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counters = new Array(N);
    var max = 0, min = 0;
    for (var i=0; i<N; i++){
        counters[i] = 0;
    }

    if(A.length < 1) {
        return counters;
    }

    for(var i=0; i<A.length; i++){
        if(A[i] > N){
            min = max;
        } else {
            counters[A[i]-1] = Math.max(counters[A[i]-1], min);
            max = Math.max(++counters[A[i]-1], max);
        }
    }

    for(var i=0; i<counters.length; i++) {
        counters[i] = Math.max(counters[i], min);
    }

    return counters;
}
