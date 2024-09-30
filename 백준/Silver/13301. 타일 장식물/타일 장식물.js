const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const num = +input;
  const arr = [0, 1];
  for (let i = 0; i<num-1; i++) {
    const sum = arr[arr.length-2] + arr[arr.length-1];
    arr.push(sum)
  }
  return (2 * arr[arr.length-1] + arr[arr.length-2]) * 2
};

console.log(solution(input));