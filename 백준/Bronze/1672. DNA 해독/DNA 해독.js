const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const dict = {
  A: { A: 'A', G: 'C', C: 'A', T: 'G' },
  G: { A: 'C', G: 'G', C: 'T', T: 'A' },
  C: { A: 'A', G: 'T', C: 'C', T: 'G' },
  T: { A: 'G', G: 'A', C: 'G', T: 'T' }
};

const solution = (input) => {
  let [n, line] = input.split('\n');
  let current = line[n-1];
  for (let i = n - 2; i >= 0; i--) {
    const curr2 = line[i]
    current = dict[curr2][current];
  }
  return current;
}

console.log(solution(input))