const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [a, b, c, d] = [input[0], ...input[1]]
console.log(a*d)
console.log(a*c)
console.log(a*b)
console.log(a*d + a*c*10 + a*b*100)