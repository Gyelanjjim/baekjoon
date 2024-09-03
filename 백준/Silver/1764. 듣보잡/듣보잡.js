const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n');
  const n = lines[0].split(' ').map(v => +v)[0];
  const a = lines.slice(1, n+1);
  const b = lines.slice(n+1);
  const obj = {};
  let result = [];
  a.forEach(v => { obj[v] = 1 });
  b.forEach(v => { obj[v] = (obj[v] || 0) + 1 });
  for (const [k, v] of Object.entries(obj)) {
    if (v === 2) result.push(k);
  }
  return [result.length, ...result.sort()].join('\n');  
}

console.log(solution(input))