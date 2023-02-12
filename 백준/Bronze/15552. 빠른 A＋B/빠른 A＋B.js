const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const list = input.slice(1)
    .map(el => el.split(" ").reduce((a,b) => a + Number(b), 0))
    .join("\n")
console.log(list)