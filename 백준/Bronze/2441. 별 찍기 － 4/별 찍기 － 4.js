const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let result = []
  for(let i = 0; i<input; i++){
    result[i] = " ".repeat(i) + '*'.repeat(input-i)
  }
  return result.join('\n')
}

console.log(solution(input))
