const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const arr = input.split(' ').map(Number).sort((a,b) => a-b);
    if (arr[2] < arr[0] + arr[1]) return arr.reduce((a, c) => a + c, 0)
    return 2 * (arr[0] + arr[1]) - 1
};

console.log(solution(input));

