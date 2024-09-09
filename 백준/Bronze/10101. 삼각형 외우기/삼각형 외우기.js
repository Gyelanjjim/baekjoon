const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const numbers = input.split('\n').map(Number);
  const sum = numbers.reduce((a,c)=>a+c,0);
  const arr = new Set(numbers);
  const size = ['Equilateral', 'Isosceles', 'Scalene'];
  
  return sum !== 180 ? 'Error' : size[arr.size-1];
}

console.log(solution(input))