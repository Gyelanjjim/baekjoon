const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const max = +input;
  const line = Array.from({ length: max }, () => '*').join(' ');
  const result = [];
  for (let i=0; i<max; i++) {
    result.push((i % 2 === 0 ? '' : ' ') + line);
  }
  return result.join('\n');
}

console.log(solution(input))