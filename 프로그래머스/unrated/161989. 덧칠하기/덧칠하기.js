function solution(n, m, section) {
    let s = section[0]
    let count = 1
    for(let i=1; i<section.length; i++){
        const v = section[i]
        if(v>=s+m){
            count++
            s = v
        }
    }
    return count
}