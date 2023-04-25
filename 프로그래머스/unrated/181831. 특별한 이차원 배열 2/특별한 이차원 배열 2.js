function solution(arr) {
    let result = 1
    arr.forEach((el,i)=>{
        el.forEach((_,j)=>{
            if(arr[i][j] !== arr[j][i]) {
                result = 0
                return false
            }
        })
    })
    return result
}