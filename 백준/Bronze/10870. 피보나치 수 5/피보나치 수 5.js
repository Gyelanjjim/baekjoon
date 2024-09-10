const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  if (input == 0) return 0
  let arr = [1]
  while (arr.length<input) {
    const num = arr.slice(-2).reduce((a,c)=>a+c,0)
    arr.push(num)
  }
  return arr[arr.length-1]
}

console.log(solution(input))