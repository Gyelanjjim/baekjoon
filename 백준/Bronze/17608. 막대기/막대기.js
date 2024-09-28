const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1).map(Number)
  let tmp;
  let count = 0;
  for (let i=0; i<lines.length; i++) {
    let idx = lines.length-1-i
    if (i === 0) {
      tmp = lines[idx]
      count++
    }
    else if (tmp < lines[idx]) {
      tmp = lines[idx];
      count++
    }
  }
  return count  
};

console.log(solution(input));

