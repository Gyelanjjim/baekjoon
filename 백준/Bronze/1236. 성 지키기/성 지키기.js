const fs = require('fs')
const input = fs.readFileSync('/dev/stdin')
                .toString().trim().split('\n')
const [w, l] = input[0].split(' ')
const dot = input.slice(1)

const solution = (w, l, dot) => {
  let [wCount,lCount] = [0, 0]
  dot.forEach(el => {
    if(!el.includes('X')) wCount++
  })
  for(let j = 0; j<l; j++){
    for(let i = 0; i<w; i++){
      if(dot[i].charAt(j) === 'X'){
        break;
      }else if(i === w-1){
        lCount++  
      } 
    }
  }
  return Math.max(wCount, lCount)
}

console.log(solution(w, l, dot))