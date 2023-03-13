const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = input => {
  return input.split('').sort((a,b)=>b-a).join('')
}

console.log(solution(input))
