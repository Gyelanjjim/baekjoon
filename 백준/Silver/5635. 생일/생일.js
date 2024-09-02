const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n').slice(1).map(v => v.split(' '))
  const arr = lines.map(([name, d, m, y]) => [name, new Date(y+'-'+m+'-'+d).getTime()/1000])
  arr.sort((a,b) => b[1] - a[1])
  return arr[0][0] + '\n' + arr[arr.length-1][0]
}

console.log(solution(input))