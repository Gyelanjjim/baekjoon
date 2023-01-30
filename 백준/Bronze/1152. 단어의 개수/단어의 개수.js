const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
input[0] ? console.log(input.length) : console.log(0)
