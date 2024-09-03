const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const arr = input.split('\n').slice(1)
    const arr2 = arr.map(v => v.split(',').reduce((a,c)=> a + Number(c), 0))
    return arr2.join('\n')
}

console.log(solution(input))