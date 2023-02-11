const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(''))
input.pop()

const solution = (input) => {
  for(let i = 0; i<input.length; i++){
    for(let j = 0; j<input[i].length; j++){
      input[i][j] === '1' ? input[i][j] = 2 : input[i][j] === '0' ? input[i][j] = 4 : input[i][j] = 3  
    }
    input[i] = input[i].reduce((a,b) => a+b, 0) + input[i].length + 1
  }
  
  return input.join('\n')
}

console.log(solution(input))