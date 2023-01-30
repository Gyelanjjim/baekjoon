const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
let result = []
input.slice(1).forEach(el => result.push(el[0] + el[el.length-1]))
console.log(result.join("\n"))