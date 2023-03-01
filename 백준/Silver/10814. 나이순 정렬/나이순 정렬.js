const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
				.split('\n').slice(1).map(el => el.split(' '))

const solution = input => {  
  return input.sort((a, b) => a[0] - b[0])
              .map(el => el.join(' '))
              .join('\n')                      
}

console.log(solution(input))