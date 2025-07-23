const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const n = +input
  let i = 0
  let k = 2
  while(i < n) {
    k += (k - 1)
    i++
  }
  return k ** 2
}

console.log(solution(input))
