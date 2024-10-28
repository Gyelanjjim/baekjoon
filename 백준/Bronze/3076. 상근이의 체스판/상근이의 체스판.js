const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [r, c, a, b] = input.split('\n').join(' ').split(' ').map(Number);
  const black = 'X'.repeat(b);
  const white = '.'.repeat(b);
  let blackLine = '';
  let whiteLine = '';
  for (let i=0; i<c; i++) {
    blackLine += i % 2 === 0 ? black : white
    whiteLine += i % 2 === 1 ? black : white
  }
  let blackSurface = Array.from({length: a}, () => blackLine).join('\n');
  let whiteSurface = Array.from({length: a}, () => whiteLine).join('\n');
  let result = [];
  for (let i=0; i<r; i++) {
    result.push(i % 2 === 0 ? blackSurface : whiteSurface)
  }
  
  return result.join('\n')
};

console.log(solution(input));

