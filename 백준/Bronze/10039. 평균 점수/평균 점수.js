const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(Number)

const solution = input => {
    let sum = 0
    input.forEach(el =>  el < 40 ? sum += 40 : sum += el)
    return sum / 5
}

console.log(solution(input))
