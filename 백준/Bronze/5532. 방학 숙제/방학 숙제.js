const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [L, A, B, C, D] = input.split('\n');
  return L - Math.max(Math.ceil(A / C), Math.ceil(B / D))
};

console.log(solution(input));

