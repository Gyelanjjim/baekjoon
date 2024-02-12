const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = ((input) => {
    const [a, b, v] = input.split(' ').map(el=>+el);
    return Math.ceil((v-b)/(a-b));
})
(input)

console.log(solution);