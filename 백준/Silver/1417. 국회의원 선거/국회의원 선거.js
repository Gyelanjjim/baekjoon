const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                 .split('\n').map(Number)
const num = input[0];
const one = input[1]
const arr = input.slice(2)

const solution = (num, one, arr) => {
  if(num === 1) return 0
  
  let max = Math.max(...arr)
  let count = 0
  
  while(one <= max){
    arr[arr.indexOf(max)] -= 1
    one += 1;
    count++;  
    max = Math.max(...arr)
  }
    
  return count
}

console.log(solution(num, one, arr));