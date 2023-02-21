const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim()
                 .split(' ').map(Number) ;

const solution = (a, b) => {
  const prime = Object.keys(primeObj(a*b))
  let [pA, pB] = [primeObj(a), primeObj(b)]
  let max = 1
  
  prime.forEach(el => {
    if(pA[el] && pB[el]){
      pA[el] > pB[el] ? 
        max *= el**pB[el] : max *= el**pA[el]
    }
  })
  return max + '\n' + a*b/max
}

const primeObj = num => {
  let i = 2
  let obj = {}
  while(num >= i){
    if(num % i === 0){
      obj[i] = ( obj[i] || 0 ) + 1
      num /= i
    }else{
      i++
    }
  }
  return obj
}

console.log(solution(a, b))