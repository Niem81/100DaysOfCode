// Given an array of  integers, rotate K position to right
// Ex. A = [3, 8, 9, 7, 6]
//    K = 3
// result = [9, 7, 6, 3, 8]

function cyclicRotationRight(arr, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    // check if A is array and K is integer
    if(!Array.isArray(arr)){
        return false;
    }
    if(typeof K != 'number' && (K%1) != 0) {
        return false;
    }
    if(arr.length <= 0) return arr;
    // loop for cycling the array elements
    for(var i = 0; i < K; i++) {
        var movedElm = arr.pop();
        arr.unshift(movedElm);
    }
    return arr;
}
