const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a, b] = input.split(' ').map(Number);
  let tmp = 0;
  for (let i = 0; i<b; i++) {
    const hang = a * (i+1);
    const rvsHang = +hang.toString().split('').reverse().join('');
    tmp = Math.max(tmp, rvsHang)
  }
  return tmp
};

console.log(solution(input));

