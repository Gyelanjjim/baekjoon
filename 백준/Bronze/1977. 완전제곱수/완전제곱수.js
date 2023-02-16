const fs = require('fs')
const [m, n] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const solution = (m, n) => {
  let result = []
  for(let i = m; i<=n; i++){
    if(Math.sqrt(i) % 1 === 0) result.push(i)
  }
  return result.length === 0 ? -1 : result.reduce((a,b)=>a+b,0) + '\n' + result[0]
}

console.log( solution(m, n) )
