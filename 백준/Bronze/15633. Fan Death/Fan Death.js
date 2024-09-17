const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let max = Math.sqrt(input)
  let nums = [];
  for (let i=1; i<=max; i++) {
    if (input % i === 0) {
      if (i !== input/i) {
        nums.push(input/i)
      }
      nums.push(i)
    }
  }
  return nums.reduce((a,c)=>a+c,0) * 5 - 24
}

console.log(solution(input))