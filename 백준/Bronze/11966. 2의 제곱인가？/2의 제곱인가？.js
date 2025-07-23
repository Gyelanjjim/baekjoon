const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let n = +input
  if (n === 1) return 1
  while(n >= 2) {
    if (n % 2 === 1) {
      return 0
    }
    n = n / 2    
  }
  return 1
}

console.log(solution(input))
