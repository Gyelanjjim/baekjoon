const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const solution = (input) => {
  const str1 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  const str2 = `abcdefghijklmnopqrstuvwxyz`
  return input.split('').map(v => {
    let idx;
    if (str1.indexOf(v) !== -1) {
      idx = str1.indexOf(v);
      return str1[(idx+13)%26]
    } else if (str2.indexOf(v) !== -1) {
      idx = str2.indexOf(v);
      return str2[(idx+13)%26]
    } else {
      return v
    }
  }).join('')
}

console.log(solution(input))