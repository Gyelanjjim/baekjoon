const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const solution = (input) => {
  const re = /FBI/g
  let result = []
  for(let i = 0; i<input.length; i++){
    if(input[i].search(re) !== -1) result.push(i+1)
  }
  return result.length !== 0 ? result.join(' ') : "HE GOT AWAY!"
}
console.log(solution(input))