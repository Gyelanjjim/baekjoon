const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('-').map(v => v.split('+').map(v => +v).reduce((a,c)=>a+c,0))
  return arr[0] - arr.slice(1).reduce((a,c)=>a+c,0)  
}

console.log(solution(input))