const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [d1, d2] = input.split('\n').map(Number);
  const pi = 3.141592;
  return 2 * (d1 + d2*pi) 
}

console.log(solution(input))