const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [a, b] = [parseInt(input[0]), parseInt(input[1])];
console.log(a+b);