const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = num => {
  let result = [];
  for(let i = 1; i<=num; i++){
    let left = ' '.repeat(num-i)
    let right = '*'.repeat(i)
    result.push(left + right)
  }
  for(let i = num-1; i>0; i--){
    let left = ' '.repeat(num-i)
    let right = '*'.repeat(i)
    result.push(left + right)
  }
  return result.join('\n')
}

console.log(solution(input))