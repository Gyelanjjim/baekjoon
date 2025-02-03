const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const e = '@'.repeat(+input+2);
  const c = '@'+' '.repeat(+input)+'@';
  const arr = [];
  arr.push(e);
  for (let i=0; i<input; i++) {
    arr.push(c)
  }
  arr.push(e);
  return arr.join('\n')
};

console.log(solution(input));

