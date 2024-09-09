const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const [a,b] = input.split('\n');
    return a*b;
}

console.log(solution(input))