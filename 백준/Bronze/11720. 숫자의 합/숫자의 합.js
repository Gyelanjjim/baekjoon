const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[1];
console.log( input.split("").reduce((a,b) => a + Number(b), 0) )