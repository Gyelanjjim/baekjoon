const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const lines = input.split('\n');
  const history = lines.slice(1).map(v => v.split(' '));
  
  const set = new Set();
  history.forEach(v => {
    const [name, act] = v;
    if (act === 'enter') set.add(name);
    else set.delete(name);
  })
  
  return [...set].sort().reverse().join('\n');
};

console.log(solution(input));