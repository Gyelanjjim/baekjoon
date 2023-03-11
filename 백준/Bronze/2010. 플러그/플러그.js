const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(Number)

const solution = (input) => {
  return input.slice(1).reduce((a,b) => a + b, 0) - input[0] + 1
}

console.log(solution(input))