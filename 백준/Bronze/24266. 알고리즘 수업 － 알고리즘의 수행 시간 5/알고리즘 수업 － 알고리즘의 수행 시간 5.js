const fs = require('fs');
const input = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (input) => {
    return `${(input**3n).toString()}\n3`;
};

console.log(solution(input));