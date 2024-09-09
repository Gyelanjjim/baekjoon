const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    return input.split(' ').reduce((a,c) => a*c, 0.5).toFixed(1);
}

console.log(solution(input))