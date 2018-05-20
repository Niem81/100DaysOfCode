// Codility Permutation Check PermCheck - Chapter 4

// My first solution : https://app.codility.com/demo/results/trainingNM267P-VEH/

function solution(A) {
    if(A.length < 1 || Math.max(...A) < 1){
        return 0;
    }
    if(A.length == 1 && A[0] != A.length){
        return 0;
    }
    var N = A.length;
    var sumA = N * (N+1) / 2;
    var innerSumA = 0;
    for(var i=0; i<A.length; i++){
        innerSumA += A[i];
    }
    if(innerSumA == sumA){
        return 1;
    } else {
        return 0;
    }

}

// My second solution : https://app.codility.com/demo/results/trainingEND34Y-JR9/

function solution2(A) {
    var N = A.length;

    if(N < 1 || Math.max(...A) < 1) return 0;
    if(N == 1 && A[0] != N) return 0;
    if(new Set(A).size !== N) return 0;

    var counter = new Array(N);
    for (var c=0; c<N; c++){
        counter[c] = c + 1;
    }

    for(var i=0; i<A.length; i++){
        if(!counter.includes(A[i])){
            return 0;
        }
    }
    return 1;
}
