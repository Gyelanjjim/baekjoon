const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
    let result = ''
    for(let i = input; i>0; i--){
        result += `${' '.repeat(i-1)}*${' *'.repeat(input-i)}\n`     
    }
    return result.slice(0, result.length-1)
}

console.log(solution(input))