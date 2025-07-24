const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input.split('\n').slice(1).map(v => v.split(' ').map((v2,i) => i > 0 ? +v2 : v2)).map((v3, i2) => v3[0].slice(0, v3[1]) + v3[0].slice(v3[2])).join('\n')
}

console.log(solution(input))