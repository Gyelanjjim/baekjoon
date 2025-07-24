const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [a, b] = input.split(' ')
  return a == b ? 1 : 0
}

console.log(solution(input))
