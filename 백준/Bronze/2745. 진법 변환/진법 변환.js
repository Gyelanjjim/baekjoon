const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [N, B] = input.split(' ');
  const arr = N.split('');
  const max = N.length-1;
  let result = 0;
  arr.forEach((v, i) => {
    const code = Number(v) < 10 ? Number(v) : v.charCodeAt(0) - 55;
    result += code * (B ** (max-i))
  })
  return result
}

console.log(solution(input))