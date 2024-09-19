const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const dict = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

const solution = (input) => {
  const [a, b, c] = input.split('\n').map(v => dict.indexOf(v));
  return (10 * a + b) * 10**c 
}

console.log(solution(input))