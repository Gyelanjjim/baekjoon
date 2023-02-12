const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let obj = {}
for(let i = 0; i<input.length; i++){
    obj[ input[i] % 42 ] = 0
}
console.log( Object.keys(obj).length )