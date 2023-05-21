function solution(n, words) {
    let c = 1   // 회차
    const w = words[0]  // 첫번째 단어
    let list = [w]  // 앞서 말한 단어 리스트
    
    for(let i=1; i<words.length; i++){
        if(i%n === 0) c++
        if(words[i-1][words[i-1].length-1] !== words[i][0]){
            return [i%n+1, c]
        }else if(list.includes(words[i])){
            return [i%n+1, c]            
        }
        list.push(words[i])
    }
    
    return [0, 0]
}