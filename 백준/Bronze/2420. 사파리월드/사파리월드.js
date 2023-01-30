const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log( Math.abs( input[0] - input[1] ) )