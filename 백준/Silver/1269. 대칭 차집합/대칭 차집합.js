const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let count = 0;
  const lines = input.split('\n');
  const [totalA, totalB] = lines[0].split(' ').map(Number);
  const [a, b] = lines.slice(1).map(v => v.split(' '));
  const map = a.reduce((acc,cur) => {
    acc[cur] = 1
    return acc
  }, {})
  b.forEach(v => {
    if (map[v]) count++ 
  })
  return totalA + totalB - (2 * count)
};

console.log(solution(input));



