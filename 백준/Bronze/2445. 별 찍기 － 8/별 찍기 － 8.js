const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let result = []
  for(let i = input; i>0; i--){
    let side = "*".repeat(input-i+1)
    let middle = ' '.repeat(i*2-2)
    result.push( side + middle + side )
  }
  for(let i = 1; i<input; i++){
    let side = "*".repeat(input-i)
    let middle = ' '.repeat(i*2)
    result.push( side + middle + side )
  }
  
  return result.join('\n')
}

console.log(solution(input))
