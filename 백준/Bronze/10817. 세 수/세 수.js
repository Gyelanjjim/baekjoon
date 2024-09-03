const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a,b,c] = input.split(' ').sort((a,b)=>b-a)
  return b;
}

console.log(solution(input))