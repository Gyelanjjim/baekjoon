const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const max = +input;
  const result = []
  for (let i=0; i<max; i++) {
      if (i === 0) {
          result.push(' '.repeat(max-1-i) + '*'.repeat(1+i))
      } else if (i === max-1){
          result.push('*'.repeat(max*2-1))
      } else {
          result.push(' '.repeat(max-1-i) + '*' + ' '.repeat(i*2-1) + '*')
      }    
  }
  return result.join('\n')
}

console.log(solution(input))