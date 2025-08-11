const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n')
  const max3sum = arr => arr.map(Number).sort((a,b)=>b-a).slice(0,3).reduce((a,c) => a+c, 0)
  const w = max3sum(lines.slice(0,10)) 
  const k = max3sum(lines.slice(10))  
  
  return `${w} ${k}`
};

console.log(solution(input));