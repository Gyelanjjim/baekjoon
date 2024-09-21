const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a,b] = input.split(' ').map(Number);
  return (a-b).toString()
}

console.log(solution(input))