const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('\n');
  const friends = arr.slice(2)
  return friends.filter(v => arr[0] === v).length; 
};

console.log(solution(input));

