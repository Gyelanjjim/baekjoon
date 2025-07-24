const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [a, b, c, d] = input.split(' ').map(Number)
  return a * 56 + b * 24 + c * 14 + d * 6
}

console.log(solution(input))
