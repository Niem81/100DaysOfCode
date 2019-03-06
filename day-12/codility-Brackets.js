// Chapter 7 - Brackets
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
//
// Write a function:
//
// function solution(S);
//
// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
//
// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]",
// the function should return 0, as explained above.

// First attempt
// So this first attempt got 37% overall , and I did not consider that multiple pair of brackets could be properly nested
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = S.split("");
    var size = N.length;
    var head, tail = 0;

    if(size%2 != 0) return 0;

    for(i=0; i<=size; i++){
        head = i;
        tail = size-1-i;

        if(N[head] == "{" && N[tail] != "}"){
            return 0;
        }
        if(N[head] == "[" && N[tail] != "]"){
            return 0;
        }
        if(N[head] == "(" && N[tail] != ")"){
            return 0;
        }
    }
    return 1;
}

// second attempt
// this time I used other resources to understand what was I doing wrong
// the score was 87% https://app.codility.com/demo/results/trainingTMRFP2-FXT/
// I guess the issue remains in spliting the string in an array and then to stack it into other array
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = S.split("");
    var size = N.length;
    var stack = [];

    if(size%2 != 0) return 0;

    for(i=0; i<size; i++){
        if(N[i] == "{" || N[i] == "[" || N[i] == "("){
            stack.push(N[i]);
        } else {
            if(stack.length == 0) return 0;
            var lastPush = stack.pop();
            if(!openClosed(lastPush, N[i])) return 0;
        }
    }
    if(stack.length != 0) return 0;
    return 1;
}

function openClosed(open, close){
    if(open == "{" && close == "}"){
        return true;
    }
    if(open == "[" && close == "]"){
        return true;
    }
    if(open == "(" && close == ")"){
        return true;
    }
    return false;
}
