const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    return input.split(',').map(v=>+v).reduce((a,c)=>a+c,0)
}

console.log(solution(input))