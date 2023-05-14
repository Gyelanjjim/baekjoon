const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
    const [a,b,c,d] = input.split('\n')
    const n = b.split(' ').map(Number)
    const m = d.split(' ').map(Number)
    const arr = new Set(n)
    return m.map(v=>arr.has(v) ? 1 : 0).join('\n')
}

console.log(solution(input))