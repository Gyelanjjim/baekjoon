const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  if (input === '0') return 0;
  const two = ['000','001','010','011','100','101','110','111'];
  let twos = '';
  for (let i=0; i<input.length; i++) {
    const n = Number(input[i]);
    twos += two[n];
  }
  let j = 0;
  while (twos[j] === '0') {
    j++;
  }
  return twos.slice(j);
}

console.log(solution(input))