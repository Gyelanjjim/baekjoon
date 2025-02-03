const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const a = '@@@@@'.repeat(+input);
  const b = '@'.repeat(+input);
  const arr = [];
  for (let i=0; i<input; i++) {
    arr.push(a)
  }
  for (let i=0; i<4*input; i++) {
    arr.push(b)
  }
  return arr.join('\n')
};

console.log(solution(input));

