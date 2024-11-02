const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const arr = lines.slice(1, 1 + n).map(v => v.split(' '));
  const map = {}
  for (const [key, value] of arr) {
    map[key] = value;
  }
  const find = lines.slice(1+n)
  return find.map(v => map[v]).join('\n')

};

console.log(solution(input));

