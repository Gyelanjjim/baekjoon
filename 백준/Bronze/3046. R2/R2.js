const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split(' ').map(Number)

const solution = input => {
  const [r1, s] = input
  return 2 * s - r1
}

console.log(solution(input))