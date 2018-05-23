// Chapter 5 - Prefix Sums - CountDiv
// My first solution: https://app.codility.com/demo/results/trainingVY5PXV-GU3/

// given three integers A, B and K, returns the number of
// integers within the range [A..B] that are divisible by K, i.e.:
// { i : A ≤ i ≤ B, i mod K = 0 }

function solution(A, B, K) {

    if(K==0) return 0;
    if(A==0){ A = 0; }
    if(B<=0) return 0;
    if(A>=B) return 0;

    var counter = 0;
    for(var i=A; i<=B; i++){
        if(i%K == 0){
            counter++;
        }
    }
    return counter;
}

// Second solution: https://app.codility.com/demo/results/training7P7UFW-9WT/
// Tried to cover all corner cases and got it, but the for loop is not suitable in terms of time complexity

function solution(A, B, K) {

    if(K==0) return 0;
    if(A<0){ A = 0; }
    if(B<0) return 0;
    if(A>B) return 0;
    if(A==B) { return A%K==0 ? 1 : 0 };
    if(K==1) return B-A+1;

    var counter = 0;
    for(var i=A; i<=B; i++){
        if(i%K == 0){
            counter++;
        }
    }
    return counter;
}

// Correct solution: https://app.codility.com/demo/results/trainingGBF99N-YHX/
