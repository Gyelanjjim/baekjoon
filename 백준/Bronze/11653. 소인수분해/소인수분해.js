const fs = require('fs')
const input = Number(fs.readFileSync('/dev/stdin').toString().trim())

const solution = num => {
    let i = 2
    let result = []
    while(num >= i ){
      if(num % i === 0){
        result.push(i)
        num /= i
      }else{
        i++
      } 
    }
    return result.join('\n')
}

console.log(solution(input))