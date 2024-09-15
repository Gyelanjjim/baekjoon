const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const n = +input;
  let arr = [0, 1]
  for (let i=0; i<n-1; i++) {
    const sum = arr[i] + arr[i+1]
    arr.push(sum)    
  }
  return arr[arr.length-1]
}


console.log(solution(input))