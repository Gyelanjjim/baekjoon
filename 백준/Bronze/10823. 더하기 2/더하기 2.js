const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input.replaceAll('\n', '').split(',').map(Number).reduce((a,c)=>a+c,0)
}


console.log(solution(input))