const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1)
  return lines.map(v => [6,7,8,9].includes(v.length) ? 'yes' : 'no').join('\n')
};

console.log(solution(input));

