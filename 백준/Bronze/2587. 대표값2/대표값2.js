const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const numbers = input.split('\n').map(Number);
  const avg = numbers.reduce((a,c) => a+c, 0)/5;
  const cen = numbers.sort((a,b) => a-b)[2];
  return avg + '\n' + cen;  
}

console.log(solution(input))