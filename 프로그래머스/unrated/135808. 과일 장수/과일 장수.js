function solution(k, m, score) {
    let sum = 0
    score.sort((a,b)=>b-a)
    
    for (let i=m-1; i<score.length; i+=m){
        sum += score[i] * m;
    }
    return sum
}