const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[1].split(' ').map(Number);
const sumArr = [ 0 ]
const solution = [];

arr.forEach((v, i) => {
  sumArr[i+1] = sumArr[i] + v;
});

input.slice(2).forEach(el => {
  const [i, j] = el.split(' ').map(Number);
  solution.push(sumArr[j] - sumArr[i-1]);
});

console.log(solution.join('\n'));