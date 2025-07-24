const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [a, b, c] = input.split(' ').map(Number)
  return Math.floor((a+1)*(b+1)/(c+1)-1)
}

console.log(solution(input))