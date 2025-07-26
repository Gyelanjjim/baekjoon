const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    return `${input}\n1`
};

console.log(solution(input));

