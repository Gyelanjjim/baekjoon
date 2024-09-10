const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return +input ? 'Leading the Way to the Future' : 'YONSEI';
}

console.log(solution(input))