const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').slice(1)

const solution = input => {
  let len = {}
  let result = ''
  input.forEach(el => len[el] = el.length)
  Object.entries(len).sort()
      .sort((a, b) => a[1] - b[1])
      .forEach(el => result += '\n' + el[0])
  return result.slice(1)                          
}

console.log(solution(input))