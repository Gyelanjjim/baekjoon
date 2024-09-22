const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const nums = input.split(' ').map(Number);
  return nums.sort((a,b) => a-b).join(' ');  
}

console.log(solution(input))
