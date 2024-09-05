const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('\n')
  const arr2 = arr.slice(0, arr.length-1)
  return arr2.map(v => {
    let count = 0;
    v.split('').forEach(v2 => {
      if ('AEIOUaeiou'.indexOf(v2) !== -1) count++;
    })
    return count
  }).join('\n')
}

console.log(solution(input))