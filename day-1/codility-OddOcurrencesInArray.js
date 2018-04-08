//  The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value,
// except for one element that is left unpaired.
// given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

function OddOcurrentecInArray(arr) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!Array.isArray(arr)){
        return false;
    }
    if(arr.length <= 0) return arr;
    var mapArr = arr.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    for (var k in mapArr){
        if(mapArr[k] <= 1 || mapArr[k] % 2 == 1){
            return parseInt(k);
        }
    }
}
