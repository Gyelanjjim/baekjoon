const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1).map(v => v.trim().toLowerCase());
  return lines.map(v => {
    const max = Math.floor(v.length / 2);
    for (let i=0; i<max; i++) {
        if (v[i] !== v[v.length-1-i]) {
          return 'No'
        }
    }
    return 'Yes'
  }).join('\n');
};

console.log(solution(input));

