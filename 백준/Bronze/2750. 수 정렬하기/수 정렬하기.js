const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = ((input) => {
    return input.split('\n').slice(1).map(v=>+v).sort((a,b)=>a-b).join('\n');
})
(input)

console.log(solution);