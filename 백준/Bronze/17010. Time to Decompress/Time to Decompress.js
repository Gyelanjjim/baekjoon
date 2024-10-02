const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return lines = input.split('\n').slice(1).map(v => {
    const [n, char] = v.split(' ');
    return char.repeat(n)
  }).join('\n');
  
};

console.log(solution(input));

