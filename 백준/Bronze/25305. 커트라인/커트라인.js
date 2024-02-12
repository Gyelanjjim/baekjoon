const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    const [s1, s2] = input.split('\n');
    const [c, i] = s1.split(' ').map(v=>+v);
    const arr = s2.split(' ').map(v=>+v);
    return arr.sort((a,b)=>b-a)[i-1];
})(input)

console.log(solution)