const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(lines) {
  let count = 0;
  const set = new Set();

  for (let i = 1; i < lines.length; i++) {
    const user = lines[i].trim();
    if (!user) continue;

    if (user === 'ENTER') {
      count += set.size;
      set.clear();
    } else {
      set.add(user);
    }
  }

  count += set.size;
  return count;
}

console.log(solution(input));