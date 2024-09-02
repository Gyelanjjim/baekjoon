const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const str = input.split('\n').map(v => v.split(' ').join('')).join('')
  const dict = {};
  for (let i=0; i<str.length; i++) {
    const char = str[i];
    dict[char] = (dict[char] || 0 ) + 1
  }
  let max = 0;
  let result = [];
  for (const [char, val] of Object.entries(dict)) {
    if (val > max) {
      result = [char];
      max = val
    } else if (val === max) {
      result.push(char);
    } 
  }
  return result.sort().join('')
}

console.log(solution(input))