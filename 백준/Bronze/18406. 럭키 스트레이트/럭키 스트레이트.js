const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let [left, right] = [0, 0]
  for (let i=0; i<input.length/2; i++) {
    left += Number(input[i]);
    right += Number(input[input.length-1-i]);
  }
  return left === right ? 'LUCKY' : 'READY';
};

console.log(solution(input));

