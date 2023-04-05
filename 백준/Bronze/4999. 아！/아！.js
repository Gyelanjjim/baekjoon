const fs = require('fs')
const [a, b] = fs.readFileSync('/dev/stdin')
                .toString().trim().split('\n')
const solution = (a, b) => {
  return a.length >= b.length ? 'go' : 'no'
}
console.log(solution(a, b))