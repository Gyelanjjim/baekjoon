const fs = require('fs');
const input = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (input) => {
    return `${(input*(input-1n)*(input-2n)/6n).toString()}\n3`;
};

console.log(solution(input));