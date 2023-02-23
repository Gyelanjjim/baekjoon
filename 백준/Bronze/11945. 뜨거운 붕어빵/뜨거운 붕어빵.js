const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                .split('\n').slice(1)

const solution = input => {
  return input.map(el => el.split('')
                           .reverse()
                           .join(''))
              .join('\n');
}

console.log(solution(input))