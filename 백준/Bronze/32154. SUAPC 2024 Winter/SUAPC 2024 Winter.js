const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const map = {
    1: { v:'A B C D E F G H J L M', c: 11 },
    2: { v:'A C E F G H I L M', c: 9 },
    3: { v:'A C E F G H I L M', c: 9 },
    4: { v:'A B C E F G H L M', c: 9 },
    5: { v:'A C E F G H L M', c: 8 },
    6: { v:'A C E F G H L M', c: 8 },
    7: { v:'A C E F G H L M', c: 8 },
    8: { v:'A C E F G H L M', c: 8 },
    9: { v:'A C E F G H L M', c: 8 },
    10: { v:'A B C F G H L M', c: 8 },
  }
  return map[input].c + '\n' + map[input].v
}

console.log(solution(input))