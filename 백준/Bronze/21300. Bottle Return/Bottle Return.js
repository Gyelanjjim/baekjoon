const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const nums = input.split(' ').map(Number);
  return nums.reduce((a, c)=> a + c, 0) * 5;
};

console.log(solution(input));

