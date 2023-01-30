const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log( input.reduce((a,b) => a+b, 0) )