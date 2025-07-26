const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    return `${input**2}\n2`
};

console.log(solution(input));

