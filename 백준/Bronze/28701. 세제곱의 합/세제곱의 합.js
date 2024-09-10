const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const n1 = Array.from({length: input}, (v,i) => i+1).reduce((a,c)=>a+c,0);
  const n2 = n1**2;
  const n3 = Array.from({length: input}, (v,i) => (i+1)**3).reduce((a,c)=>a+c,0);
  return [n1, n2, n3].join('\n')
}

console.log(solution(input))