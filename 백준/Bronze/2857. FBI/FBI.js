const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const solution = (input) => {
  let result = []
  for(let i = 0; i<input.length; i++){
    if(input[i].split("FBI").length > 1) result.push(i+1)
  }
  return result.length === 0 ? "HE GOT AWAY!" : result.join(" ")
}

console.log(solution(input))