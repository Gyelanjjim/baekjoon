const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const set = new Set(lines.slice(1, 1 + n));
  const chars = lines.slice(1 + n);
  let count = 0;
  chars.forEach(v => {
    if(set.has(v)) count++;
  })
  return count;
};

console.log(solution(input));