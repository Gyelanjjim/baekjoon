const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map(v => v.split(' ').map(BigInt));
  let result = [];
  for (let i=0; i<lines.length; i++) {
    const [a, b] = lines[i];
    if (a === 0n && b === 0n) break;
    if (a > b) {
      result.push('Yes');
    } else {
      result.push('No');
    }
  }
  return result.join('\n');
};

console.log(solution(input));

