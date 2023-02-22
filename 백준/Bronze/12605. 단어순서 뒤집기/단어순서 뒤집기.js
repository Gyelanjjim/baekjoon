const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                 .split('\n').slice(1);

const solution = a => {
  return a.map((el,i) => {
    el = el.split(' ').reverse().join(' ')
    return `Case #${i+1}: ${el}`;
  }).join('\n')
}

console.log(solution(input));