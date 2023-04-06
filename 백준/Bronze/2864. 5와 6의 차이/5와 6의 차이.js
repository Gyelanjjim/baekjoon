const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  const min = input.replaceAll(/[6]/g, 5).split(' ').map(Number).reduce((a,b)=>a+b,0)
  const max = input.replaceAll(/[5]/g, 6).split(' ').map(Number).reduce((a,b)=>a+b,0)
  return min +' '+ max
}

console.log(solution(input))