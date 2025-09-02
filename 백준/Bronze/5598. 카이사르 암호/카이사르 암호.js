const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const a = `A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`.split(' ');
  const b = `D E F G H I J K L M N O P Q R S T U V W X Y Z A B C`.split(' ');
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const idx = b.findIndex(v => v === char);
    result += a[idx];
  }
  return result;
};

console.log(solution(input));