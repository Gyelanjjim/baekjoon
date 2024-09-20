const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const max = +input;
  if (max === 1) return '*';
  else {
    const a = Array.from({length: max}, (v, i) => i % 2 === 0 ? '*' : ' ').join('')
    const b = Array.from({length: max}, (v, i) => i % 2 === 1 ? '*' : ' ').join('')
    return Array.from({length: max}, () => a + '\n' + b).join('\n')
  }
}

console.log(solution(input))