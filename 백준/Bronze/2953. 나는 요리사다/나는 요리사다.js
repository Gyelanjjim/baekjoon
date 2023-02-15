const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(el => el.split(' ')
                .reduce((a,b) => a + Number(b), 0))

const solution = (input) => {
  let max = Math.max(...input)
  input.forEach((el,i) => {
    if(el === max) console.log(i+1, max)
  })
}

solution(input)
