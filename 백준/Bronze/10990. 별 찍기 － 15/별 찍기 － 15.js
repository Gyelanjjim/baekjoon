const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  let arr = []
  for(let i = 1; i<=input; i++){
    let str = ''
    if(i<2){
      str += ' '.repeat(input-i) + '*'  
    }else{
      str += ' '.repeat(input-i) + '*' + ' '.repeat(i*2-3) + '*'
    }
    arr.push(str)
  }
  return arr.join('\n')
}

console.log(solution(input))