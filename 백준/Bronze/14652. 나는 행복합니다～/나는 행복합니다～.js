const fs = require('fs')
const [n, m, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

console.log( [parseInt(k / m), k % m].join(' ') )