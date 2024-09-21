const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const max = +input;
  let result = [];
  const stars = ['*', '*'];
  for (let i=0; i<max; i++) {
    if (i === 0) result.push('*');
    else {
      const corque = stars.join('*'.repeat(3+4*(i-1)));
      const pied = stars.join(' '.repeat(3+4*(i-1)));
      const filling = result.map(v => `* ${v} *`);
      result = [corque, pied, ...filling, pied, corque]
    } 
  }
  return result.join('\n')
}

console.log(solution(input))