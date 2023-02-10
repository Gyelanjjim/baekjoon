const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
const [a, b] = [ BigInt(input[0]), BigInt(input[1]) ]

console.log( (a+b).toString() )