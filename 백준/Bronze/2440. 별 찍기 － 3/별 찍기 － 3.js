const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = input => {
    let result = []
    for(let i = Number(input); i > 0; i--){
        result.push("*".repeat(i))
    }
    return result.join('\n')
}

console.log(solution(input))