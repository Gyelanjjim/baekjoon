const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.slice(1).map(el => el[0] + el[el.length-1] )
console.log(arr.join("\n"))
