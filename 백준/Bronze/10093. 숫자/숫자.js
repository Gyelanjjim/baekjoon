const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a, b] = input.split(' ').map(Number);
  const [min, max] = [Math.min(a,b), Math.max(a,b)]
  const count = a === b ? 0 : max - min - 1;
  const nums = Array.from({length: count }, (_,i) => i+min+1)
  return count + '\n' + nums.join(' ')
};

console.log(solution(input));

