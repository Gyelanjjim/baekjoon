function solution(k, m, score) {
    let sum = 0
//     score.sort((a,b)=>b-a)
    
//     for (let i=m-1; i<score.length; i+=m){
//         sum += score[i] * m;
//     }
    score.sort((a,b)=>a-b)
    const s = score.length % m
    for (let i=s; i<score.length; i+=m){
        sum += score[i] * m;
    }
    return sum
}