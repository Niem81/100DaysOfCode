// Ny Solution: https://app.codility.com/demo/results/trainingPBJ5G7-2QB/

function solution(A) {

    var include = [];
    var returnedVal = 1;
    if(A.length <= 0 || Math.max(...A) <= 0){
        return returnedVal;
    }
    for(var i=0; i<A.length; i++){
        include[A[i]] = true;
    }
    while(include[returnedVal]){
        returnedVal++;
    }

    return returnedVal;
}
