const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').slice(1).map(Number)

const solution = input => {
  const stack = [];
  input.forEach(el => el !== 0 ? stack.push(el) : stack.pop());
  return stack.reduce((a,b)=>a+b,0)
}
console.log(solution(input))