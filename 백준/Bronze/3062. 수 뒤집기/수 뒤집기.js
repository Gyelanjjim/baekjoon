const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1);
  const result = [];
  for (const num of lines) {
    const orgNum = +num;
    const rvsNum = +num.split('').reverse().join('');
    const sumStr = (orgNum + rvsNum).toString();
    const sumLen = sumStr.length;
    for (let i = 0; i<Math.floor(sumLen/2); i++) {
      if (sumStr[i] !== sumStr[sumLen-1-i]) {
        result.push('NO');
        break;
      } else if (i === Math.floor(sumLen/2)-1) {
        result.push('YES');
      }
    }
  }
  return result.join('\n');
};

console.log(solution(input));

