const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input * 10 / 11;  
};

console.log(solution(input));

