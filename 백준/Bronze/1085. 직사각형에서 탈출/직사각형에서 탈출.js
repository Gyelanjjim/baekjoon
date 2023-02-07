const fs = require('fs')
const [x,y,w,h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

const solution = (x,y,w,h) => {
  return Math.min(...[x,y,w-x,h-y])
}

console.log(solution(x,y,w,h))