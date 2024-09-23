const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [[N, K], A] = input.split('\n').map(v => v.split(' ').map(Number));
  let count = 0;
  for (let i=N-1; i>0; i--) {
    const select = A[i];
    const bigger = Math.max(...A.slice(0, i));
    const bi = A.indexOf(bigger)
    if (bigger > select) {
      let tmp = select;
      A[i] = bigger;
      A[bi] = tmp;
      count++;
      if (count === K) {
        return tmp + ' ' + bigger;
      }
    } else {
      continue;
    }       
  }
  return -1;
}

console.log(solution(input))