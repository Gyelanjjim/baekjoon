const fs = require('fs')
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim()
                .split(' ')

const fa = num => {
  let result = 1
  for(let i = num; i > 1; i--){
    result *= i
  }
  return result
}

const solution = (n, k) => {
    return n === k ? 1 : fa(n) / (fa(n-k) * fa(k)) 
}

console.log(solution(n,k))