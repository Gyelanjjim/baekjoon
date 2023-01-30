const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.reduce((a,b) => a * b, 1).toString().split("")
let obj = {}
for(let i = 0; i<10; i++){
    obj[i] = 0
}

for(let i = 0; i<arr.length; i++){
    obj[ arr[i] ] += 1 
}
console.log(Object.values(obj).join("\n"))