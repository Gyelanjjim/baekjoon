const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.trim().split('\n');
  const data = lines.slice(1);
  let result = [];
  
  for (let i = 0; i < data.length; i += 3) {
    const ops = data[i];
    const n = parseInt(data[i + 1]);
    let arr = JSON.parse(data[i + 2]);
    
    let flag = false;
    let start = 0;
    let end = n;
    let error = false;
    
    for (let j = 0; j < ops.length; j++) {
      if (ops[j] === 'R') {
        flag = !flag;
      } else if (ops[j] === 'D') {
        if (start === end) {
          error = true;
          break;
        }
        flag ? end-- : start++;
      }
    }
    
    if (error) {
      result.push('error');
    } else {
      const newArr = arr.slice(start, end);
      result.push(JSON.stringify(flag ? newArr.reverse() : newArr));
    }
  }
  return result.join('\n');
};

console.log(solution(input))