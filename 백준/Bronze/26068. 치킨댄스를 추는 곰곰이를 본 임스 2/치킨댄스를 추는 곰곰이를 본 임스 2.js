const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input.split('\n').slice(1).map(v => v.slice(2)).filter(v => v <= 90).length;
};

console.log(solution(input));

