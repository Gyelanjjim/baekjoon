const input = require('fs').readFileSync('/dev/stdin')
                .toString().trim().split('\n')
const coin = input[0].split(' ')[1]
const arr = input.slice(1).reverse()

const solution = (arr, coin) => {
  let count = 0
  arr.forEach(el => {
    if(parseInt(coin / el) > 0){
      count += parseInt(coin / el)
      coin %= el
    }else if(coin % el === 0){
      return false
    }
  })
  return count 
}
console.log(solution(arr, coin))