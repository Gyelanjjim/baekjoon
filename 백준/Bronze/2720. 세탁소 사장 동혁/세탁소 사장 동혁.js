const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const moneys = input.split('\n').slice(1);
  let arr = []
  for (const c of moneys) {
    const q = parseInt(c/25)
    const qMod = c % 25
    const d = parseInt(qMod/10)
    const dMod = qMod % 10
    const n = parseInt(dMod/5)
    const p = dMod % 5
    arr.push(q+' '+d+' '+n+' '+p)
  }
  return arr.join('\n')
}

console.log(solution(input))