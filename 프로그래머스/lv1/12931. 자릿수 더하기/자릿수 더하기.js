// function solution(n) {
//     return `${n}`.split("").reduce((a,b)=>Number(a)+Number(b),0)
// }
function solution(n){    
    var a = (n + ''); 
    return [...a].reduce((a,c)=>Number(a)+Number(c),0)
}