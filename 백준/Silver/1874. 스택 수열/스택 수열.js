const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number)
const N = input[0]
const a = input.slice(1)

const solution = (N, a) => {
  let stack = []
  let result = ''
  let j = 0
  for(let i = 1; i <= N; i++){
    stack.push(i)
    result += '\n+'
    while(stack[stack.length-1] === a[j]){
      stack.pop()
      result += '\n-'
      j++
      if(j === N) break;
    }
  } 
  
  return stack.length === 0 ? result.slice(1) : 'NO'
}

console.log(solution(N, a))