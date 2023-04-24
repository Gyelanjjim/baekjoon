function solution(n, k) {
    let arr = []
    for(let i=1; i<=n; i++){
        if(i % k === 0) {
            arr.push(i)   
        }
    }
    return arr
}