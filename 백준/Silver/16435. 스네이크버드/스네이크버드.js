const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').map(v => v.split(' ').map(Number));
  let [, l] = lines[0];
  const arr = lines[1].sort((a, b) => a - b); 
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (v <= l) {  
      l++;
    } else {
      break;
    }
  }
  return l;
}


console.log(solution(input));
