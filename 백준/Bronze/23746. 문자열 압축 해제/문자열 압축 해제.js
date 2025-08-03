const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const lines = input.split('\n');
    const dict = lines.slice(1, -2).reduce((a,c) => {
      const [str, comp] = c.split(' ');
      a[comp] = str;
      return a;
    }, {});
    const spc = lines.slice(-2,-1)[0];
    const [S,E] = lines.slice(-1)[0].split(' ').map(Number);
    return spc.split('').map(v => dict[v]).join('').slice(S-1,E)
};

console.log(solution(input));



