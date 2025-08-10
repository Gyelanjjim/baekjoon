const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [,a,,b] = input.split('\n');
  const set = new Set(a.split(' '))
  return b.split(' ').map(v => {
    if (set.has(v)) return 1
    else return 0
  }).join(' ')  
};

console.log(solution(input));