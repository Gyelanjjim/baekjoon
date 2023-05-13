const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  const arr = input.split('\n')
  arr.splice(-1)
  let result = []
  for(let i=0; i<arr.length; i++){
      const v = arr[i]
      for(let j=0; j<v.length/2; j++){
          if(v[j] !== v[v.length-1-j]){
              result.push('no')
              break;
          }else if(j>=v.length/2-1){
              result.push('yes')
          }   
      }
  }
  return result.join('\n')
}
console.log(solution(input))