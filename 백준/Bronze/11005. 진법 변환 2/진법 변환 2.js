const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [n, b] = input.split(' ').map(Number);
  let str = ''
  while(n >= b) {
    const r = n % b // 나머지
    const q = parseInt(n / b) // 몫
    str = (r >= 10 ? String.fromCharCode(r + 55) : r) + str
    n = q
  }
  return ((n >= 10 ? String.fromCharCode(n + 55) : n) + str).toString()
}

console.log(solution(input))