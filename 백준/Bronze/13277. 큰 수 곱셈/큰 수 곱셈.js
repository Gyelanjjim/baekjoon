const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = input => {
  return input.split(' ').reduce((a,b) => a * BigInt(b), 1n).toString()
}

console.log(solution(input))
