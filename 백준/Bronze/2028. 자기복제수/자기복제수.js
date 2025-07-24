const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return input.split('\n').slice(1).map(v => {
    const length = `${v}`.length
    return `${v ** 2}`.slice(-length) === v ? 'YES' : 'NO'
  }).join('\n')
}

console.log(solution(input))