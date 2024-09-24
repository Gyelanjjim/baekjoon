const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const n = +input;
  const sum = Array.from({ length: n-1 }, (_,i) => BigInt(i)+1n).reduce((a,c)=>a + BigInt(c), 0n)
  return (BigInt(n+1) * sum).toString();
}

console.log(solution(input))