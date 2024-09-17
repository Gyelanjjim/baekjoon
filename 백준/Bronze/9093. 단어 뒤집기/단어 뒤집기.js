const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1);
  return lines.map(v => v.split(' ').map(v2 => 
    v2.split('').reverse().join('')
  ).join(' ')).join('\n')
}

console.log(solution(input))