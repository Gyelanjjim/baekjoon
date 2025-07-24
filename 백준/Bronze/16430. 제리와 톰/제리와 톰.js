const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [a, b] = input.split(' ').map(Number)
  return `${b-a} ${b}`
}

console.log(solution(input))
