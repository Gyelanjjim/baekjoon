const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  let result = 0 ;
  const nmap = {
    a: 10, 
    b: 11,
    c: 12,
    d: 13,
    e: 14, 
    f: 15,
  }
  if (input.indexOf('0x') !== -1) {
    const num = input.slice(2)
    for (let i = 0; i<num.length; i++) {
      const n = num[i]
      const N = nmap[n] ?? +n
      result += N*16**(num.length-i-1)
    }
  } else if (input[0] === '0') {
    const num = input.slice(1)
    for (let i = 0; i<num.length; i++) {
      const n = num[i]
      result += n*8**(num.length-i-1)
    }
  } else {
    return +input
  }
  return result
}

console.log(solution(input))