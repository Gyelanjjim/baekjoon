// function solution(myString, pat) {
//     const qEnd = myString.length
//     const qLen = pat.length
//     let e = qEnd
//     for(;e > qEnd-qLen; e--){
//         if(myString.slice(e-qLen, e) === pat) break;
//     }  
//     return myString.slice(0, e)
// }
const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat
