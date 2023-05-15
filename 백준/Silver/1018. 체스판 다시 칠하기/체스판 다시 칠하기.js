let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim()

const solution = input => {
  input = input.split('\n')
  const [a,b] = input[0].split(' ').map(Number)
  const board = input.slice(1)
  
  const bw = 'BWBWBWBW'
  const wb = 'WBWBWBWB'
  
  let arr = []
  
  for(let i=0; i<a-7; i++){
    for(let j=0; j<b-7; j++){
      let [bwC, wbC] = [0, 0]
      for(let k=i; k<i+8; k+=2){
        for(let l=j; l<j+8; l++){
          if(board[k][l] !== bw[l-j]) bwC++
          if(board[k][l] !== wb[l-j]) wbC++
        }
      }
      for(let k=i+1; k<i+9; k+=2){
        for(let l=j; l<j+8; l++){
          if(board[k][l] !== wb[l-j]) bwC++
          if(board[k][l] !== bw[l-j]) wbC++
        }
      }
      arr.push(Math.min(bwC, wbC))
    }
  }

  return Math.min(...arr)
}

console.log(solution(input))