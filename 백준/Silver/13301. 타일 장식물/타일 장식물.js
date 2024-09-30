const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const num = +input;
  let a = 0n;
  let b = 1n;
  let tmp;
  for (let i = 0; i<num-1; i++) {
    tmp = a;
    a = b;
    b += tmp;
  }
  return (4n * b + 2n * a).toString();  
};

console.log(solution(input));

