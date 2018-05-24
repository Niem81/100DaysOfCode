// Codility Chapter 5 - GenomicRangeQuery

/*
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

the function should return the values [2, 4, 1], as explained above.
*/

// My solution : https://app.codility.com/demo/results/trainingMREBZU-8PX/

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var N = S.split('');
    var M = P.length;
    var result = [];
    var groups = new Array();

    for(var i=0; i<M; i++){
        if(Q[i] >= N.length) { Q[i]=N-1; }
        groups.push(N.slice(P[i], Q[i]+1));
    }

    for(var j=0; j<groups.length; j++){
        if(groups[j].includes('A')){
            result.push(1);
        }else if(groups[j].includes('C')){
            result.push(2);
        }else if(groups[j].includes('G')){
            result.push(3);
        }else if(groups[j].includes('T')){
            result.push(4);
        }
    }
    return result;
}
