function solution(n) {
    let arr = []
    for(let i=0; i<n; i++){
        let str = ''
        for(let j=0; j<n; j++){
            i === j ? str += 1 : str += 0
        }
        arr.push([...str].map(Number))
    }
    return arr
}