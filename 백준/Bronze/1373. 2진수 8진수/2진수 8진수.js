const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  const map = {
    '000': 0, 
    '001': 1, 
    '010': 2, 
    '011': 3, 
    '100': 4, 
    '101': 5, 
    '110': 6, 
    '111': 7
  };
  const mod = input.length % 3;
  const zeros = {
    0: '',
    1: '00', 
    2: '0'
  }
  let result = ''
  input = zeros[mod] + input
  for (let i=0; i<input.length; i+=3) {
    const two = input.slice(i, i+3);
    result += map[two]
  }
  return result
}
console.log(solution(input))