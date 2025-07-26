const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input.split('\n').slice(1).map(v => v.split(' ').map(Number)).sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  }).map(v => v.join(' ')).join('\n');
};

console.log(solution(input));

