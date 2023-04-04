const fs = require('fs')
const [s, i] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(s, i) {
    return s.charAt(i-1)
}
console.log(solution(s, i))