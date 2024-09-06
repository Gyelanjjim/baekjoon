const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [a,b,c,d,e,f] = input.split(' ');
  return [(e*c-b*f)/(e*a-b*d), (c*d-a*f)/(b*d-a*e)].join(' ')  
}

console.log(solution(input))