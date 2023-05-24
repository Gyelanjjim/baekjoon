function solution(s) {
    let x = s[0]
    let num = 0
    let count = 0
    for(let i=0; i<s.length; i++){
        x === s[i] ? num++ : num--
        if(!num || i === s.length-1) {
            count++
            x = s[i+1]
        }
    }
    return count
}