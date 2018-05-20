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
