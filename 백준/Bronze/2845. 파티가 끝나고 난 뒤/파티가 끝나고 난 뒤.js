const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(el => el.split(' ').map(Number))

const solution = input => {
  const count = input[0][0] * input[0][1]
  return input[1].map(el => el - count).join(" ")
}

console.log(solution(input))