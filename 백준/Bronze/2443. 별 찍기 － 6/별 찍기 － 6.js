const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let result = []
  for(let i = input; i>=1; i--){
    let side = " ".repeat(input-i)
    let middle = '*'.repeat(i*2-1)
    result.push( side + middle )
  }
  return result.join('\n')
}

console.log(solution(input))