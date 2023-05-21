function solution(k, score) {
    let result = []
    let arr = []
    for(let i=0; i<score.length; i++){
        const newArr = [...arr, score[i]].sort((a,b)=>a-b)
        arr = i<k ? newArr : newArr.slice(-k)
        result.push(arr[0])
    }
    return result
}