const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const solution = input => {
  const [a, b, c] = input[0].split(' ').map(Number).sort((a,b)=>a-b)
  const obj = {
    'A': a,
    'B': b,
    'C': c
  }
  let result = ''
  input[1].split('').forEach(el => result += ' ' + obj[el])
  return result.trim()
}

console.log(solution(input))