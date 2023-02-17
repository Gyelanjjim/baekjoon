const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let result = []
  
  for(let i = 1; i <= input; i++){
    result.push('*'.repeat(i))
  }
  for(let i = input-1; i > 0; i--){
    result.push('*'.repeat(i))
  }
    
  return result.join('\n')
}

console.log(solution(input))