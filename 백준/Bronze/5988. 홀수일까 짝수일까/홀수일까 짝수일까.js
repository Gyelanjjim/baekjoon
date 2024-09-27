const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const nums = input.split('\n').slice(1);
  return nums.map(v => [1,3,5,7,9].includes(+v[v.length-1]) ? 'odd' : 'even').join('\n')
};

console.log(solution(input));

