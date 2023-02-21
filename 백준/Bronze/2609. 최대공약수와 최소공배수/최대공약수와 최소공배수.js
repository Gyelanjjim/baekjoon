const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim()
                 .split(' ').map(Number);

const solution = (a,b) => {
  const smaller = Math.min(a, b);
  
  for (let i = smaller; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i +'\n'+ a * b / i
    }
  }
}

console.log(solution(a,b));