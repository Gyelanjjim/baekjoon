const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const [a,b] = input.split('\n');
    return a.split(b).length - 1;
};

console.log(solution(input));



