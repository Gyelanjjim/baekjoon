const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let arr = ''
  for(let i=0; i<input.length; i+=10){
    arr += '\n' + input.slice(i, i+10)
  }
  return arr.slice(1)
}

console.log(solution(input))