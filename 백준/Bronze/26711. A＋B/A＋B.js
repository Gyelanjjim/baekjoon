const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const solution = input => {
    return ( BigInt(input[0]) + BigInt(input[1]) ).toString()
}

console.log( solution(input) )