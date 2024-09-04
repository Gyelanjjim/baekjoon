const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('\n').slice(1).map(v => v.split(' '));
  const map = {
    '1': { mod: 1, val: [1] },
    '2': { mod: 4, val: [2,4,8,6] },
    '3': { mod: 4, val: [3,9,7,1] },
    '4': { mod: 2, val: [4,6] },
    '5': { mod: 1, val: [5] },
    '6': { mod: 1, val: [6] },
    '7': { mod: 4, val: [7,9,3,1] },
    '8': { mod: 4, val: [8,4,2,6] },
    '9': { mod: 2, val: [9,1] },
    '0': { mod: 1, val: [10] },
  }
  let result = [];
  for (const [a, b] of arr) {
    const one = a.slice(-1);
    const { mod, val } = map[one];
    result.push(val[(b-1) % mod]);
  }
  return result.join('\n');  
}

console.log(solution(input));