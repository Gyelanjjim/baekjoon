const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  return `:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`
}

console.log(solution(input))