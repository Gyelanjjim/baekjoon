const fs = require('fs');
const [n, k] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number)

const solution = (n, k) => {
  let arr = new Array(n).fill(0)
  arr.forEach((el, i) => arr[i] = (arr[i-1] || 0) + 1)
    
  let i = -1
  let count = 0
  let result = []
  
  while(result.length !== n){
    i++
    count++
    if(count % k === 0){
      result.push(arr[i])   
      arr.splice(i,1)
      i--
    }
    if(i === arr.length-1){
      i = -1
    }
  }
  return '<' + result.join(', ') + '>'
}

console.log(solution(n, k))