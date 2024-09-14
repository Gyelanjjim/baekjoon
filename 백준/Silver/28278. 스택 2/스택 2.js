const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1);
  let stack = [];
  let result = [];
  const mv = {
    '1': (n) => {
      stack.push(n)
    },
    '2': () => {
      if (stack.length) {
        result.push(stack.pop());
      } else {
        result.push(-1) 
      }
    },
    '3': () => {
      result.push(stack.length)
    },
    '4': () => {
      if (stack.length) {
        result.push(0)
      } else {
        result.push(1)
      }
    },
    '5': () => {
      if (stack.length) {
        result.push(stack[stack.length-1]);
      } else {
        result.push(-1) 
      }
    },
  }
  for (let i=0; i<lines.length; i++) {
    const line = lines[i];
    let [a, n] = line.split(' ');
    mv[a](n)
  }
  return result.join('\n')
}


console.log(solution(input))