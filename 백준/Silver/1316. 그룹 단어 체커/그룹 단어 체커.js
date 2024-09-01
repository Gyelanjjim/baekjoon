const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const words = input.split('\n').slice(1);
  let count = 0
  for (const word of words) {
    const arr = word.split('');
    const arr2 = []
    let bf = ''
    for (let k = 0; k <arr.length; k++) {
      const alpha = arr[k]
      if (bf !== alpha && arr2.includes(alpha)) {
        break;
      }
      if (bf !== alpha && !arr2.includes(alpha)) {
        arr2.push(alpha)
        bf = alpha;
      }
      
      if (k === arr.length - 1) {
        count++
      }
    }
  }
  return count
}

console.log(solution(input))