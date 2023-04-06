const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n')[1].split(' ').map(Number).sort((a,b)=>a-b)

const solution = input => {
  return input.map((el,i) => 
    input.slice(0,i+1).reduce((a,b)=>a+b,0)
  ).reduce((a,b)=>a+b,0)
}

console.log(solution(input))