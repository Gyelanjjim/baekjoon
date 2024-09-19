const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const n = BigInt(input);
  if (n === 0n) return 0;
  if (n === 1n) return 1;

  let arr = [0n, 1n];
  for (let i = 2n; i <= n; i++) {
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
  }
  return arr[arr.length - 1].toString();
}

console.log(solution(input));
