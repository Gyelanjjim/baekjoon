const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a,b,c,d] = input.split(' ');
  return Number(a+b) + Number(c+d);
};

console.log(solution(input));

