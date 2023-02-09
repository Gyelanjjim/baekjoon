const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const solution = str => +str[0] + +str[1]

console.log( solution(input) )