const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = input => {
  let newNum = 0
  let i = 0
  let k = input

  while(true){
    newNum = (k % 10) + "" + (( parseInt(k / 10) + k%10 ) % 10 )
    i++
    if(Number(input) !== Number(newNum)) {
      k = newNum
    }else{
      return i
    }
  }
}

console.log(solution(input))