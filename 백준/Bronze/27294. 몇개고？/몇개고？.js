const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const [T, S] = input.split(' ').map(Number);
    if (S === 0 && T >= 12 && T <= 16) return 320;
    return 280;
};

console.log(solution(input));



