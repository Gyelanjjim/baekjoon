const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a, b] = input.split('\n')
  const dict = {}
  for (let i=0; i<a.length; i++) {
    const char = a[i];
    dict[char] = (dict[char] || 0) + 1
  }
  for (let i=0; i<b.length; i++) {
    const char = b[i]
    dict[char] = (dict[char] || 0) - 1
  }
  return Object.values(dict).map(v => Math.abs(v)).reduce((a,c)=>a+c,0)
}

console.log(solution(input))