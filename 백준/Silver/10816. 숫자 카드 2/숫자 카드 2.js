const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input[1].split(' ')
const m = input[3].split(' ')

const solution = (n, m ) => {
  let result = [];
  let resultMap = new Map();
  for (el1 of n) {
    if (resultMap.has(el1))
      resultMap.set(el1, resultMap.get(el1) + 1);
    else resultMap.set(el1, 1);
  }

  for (el2 of m) {
    if (resultMap.has(el2)) result.push(resultMap.get(el2));
    else result.push(0);
  }
  return result.join(' ')
}

console.log(solution(n, m))