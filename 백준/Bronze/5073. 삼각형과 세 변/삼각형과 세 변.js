const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map(v => v.split(' ').map(Number));
  return lines.map(v => {
    const [a,b,c] = v
    if (a === 0) {
      return ''
    } else if (a === b && b === c) {
      return 'Equilateral'
    } else if (
      a === b && a+b > c ||
      b === c && b+c > a ||
      c === a && c+a > b
    ) {
      return 'Isosceles'
    } else if (
      a === Math.max(...v) && b+c > a ||
      b === Math.max(...v) && c+a > b ||
      c === Math.max(...v) && a+b > c
    ) {
      return 'Scalene'
    } else {
      return 'Invalid'
    }
  }).join('\n').trim()
};

console.log(solution(input));