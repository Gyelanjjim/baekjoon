const fs = require('fs');
const input = Number( fs.readFileSync("/dev/stdin").toString().trim() )

const solution = length => {
  let queue = Array.from({length}, (_, i) => i+1);
  let s = 0
  while(s !== queue.length-1){
    s++
    queue.push(queue[s])
    s++
  }
  
  return queue[queue.length-1]
}


console.log(solution(input))