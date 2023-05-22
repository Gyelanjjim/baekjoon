function solution(board, moves) {
    let count = 0
    let stack = []
    const obj = {}
    for(let i=0; i<board.length; i++){
        obj[i+1] = []
        for(let j=board.length-1; j>=0; j--){
            if(board[j][i] !== 0) obj[i+1].push(board[j][i])
        }
    }
    
    moves.forEach(v=>{
        if(obj[v].length !== 0) stack.push(obj[v].pop())     
        if(stack.length >= 2 && stack[stack.length-1] === stack[stack.length-2]) {
            stack.splice(stack.length-2,2)
            count += 2
        }
    })
    return count
    
}