const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()

const solution = input => {
  let obj = {}
  for(let i = 1; i<=input.length; i++){
    for(let j = 0; j<=input.length-i; j++){
      obj[input.slice(j, j+i)] = 0
    }
  }
  return Object.keys(obj).length
}

console.log(solution(input))