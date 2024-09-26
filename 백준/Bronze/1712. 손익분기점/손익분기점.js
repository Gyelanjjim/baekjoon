const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const solution = (input) => {
  const [a,b,c] = input.split(' ').map(Number);
  return b >= c ? -1 : Math.floor(a / (c - b)) + 1;  
};

console.log(solution(input));