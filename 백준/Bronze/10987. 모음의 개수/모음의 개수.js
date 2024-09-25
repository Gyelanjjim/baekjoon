const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const str = 'bcdfghjklmnpqrstvwxyz'
  str.split('').forEach(v => {
    input = input.replaceAll(v, '');
  })
  return input.length;
};

console.log(solution(input));