function solution(s){
    if (s.length % 2 != 0) return 0; 
    let result = [];
    for (let i = 0; i < s.length; i++){
        s[i] === result[result.length-1] ? result.pop() : result.push(s[i])
    } 
    return result.length === 0 ? 1 : 0 ;
}