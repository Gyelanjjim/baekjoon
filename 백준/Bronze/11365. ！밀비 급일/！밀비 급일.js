const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

input.pop()

const solution = input => {
  return input.map(el => el.split('')
                           .reverse()
                           .join(''))
              .join('\n');
}

console.log(solution(input))