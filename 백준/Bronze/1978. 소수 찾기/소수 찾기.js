const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n')[1].split(' ')

const solution = (input) => {
  let count = 0
  for(let i=0; i<input.length; i++){
      const v = +input[i]
      if(v === 2 || v === 3){
          count++
      }else{
          const end = parseInt(Math.sqrt(v))
          for(let j=2;j<=end;j++){
              if(v % j === 0){
                  break;
              }else if(j>end-1){
                  count++
              }
          }
      }
  }  
  return count
}

console.log(solution(input))