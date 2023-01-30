const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const result = input.map(el => Number( [...el].reverse().join("") ) )
console.log(Math.max(...result))
