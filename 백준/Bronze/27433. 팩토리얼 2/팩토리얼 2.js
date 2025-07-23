const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let n = +input
  let m = 1
  for (let i = n; i>0; i--) {
    m *= i
  }
  return m
}

console.log(solution(input))
