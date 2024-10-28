const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('\n')[1].split(' ').map(Number);
  let count = 0;
  let map = {}
  arr.forEach(v => !map[v] ? map[v] = 1 : count++)
  return count
};

console.log(solution(input));

