const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').slice(1).map(el => el.split(' '))

const solution = input =>{
  return input.map(el => {
    let [h, w, n] = el
    if(n % h === 0 ){
      return h + ( '0' + (parseInt(n/h)) ).slice(-2)
    }else{
      return n%h + ( '0' + (1 + parseInt(n/h)) ).slice(-2)
    } 
  }).join('\n')
}
console.log(solution(input))