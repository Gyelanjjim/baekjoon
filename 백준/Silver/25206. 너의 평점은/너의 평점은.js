const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map(v=>v.split(' '))
  const map = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
  }
  let total = 0;
  let score = 0
  for (const [title, sNum, sName] of lines) {
    if (sName == 'P') continue;
    total += Number(sNum) * map[sName]
    score += Number(sNum)
  }
  return (total / score).toFixed(6)
}

console.log(solution(input))