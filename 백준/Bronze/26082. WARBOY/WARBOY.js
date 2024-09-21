const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a,b,c] = input.split(' ').map(Number);
  return 3 * b * c / a;
}

console.log(solution(input))