function solution(board, k) {
    let sum = 0
    board.forEach((v,i) => {
        v.forEach((e,j) => {
            if(i+j <= k){
                sum += e
            }
        })
    })
    return sum
}