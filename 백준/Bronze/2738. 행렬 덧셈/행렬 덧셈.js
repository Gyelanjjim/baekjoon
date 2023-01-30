const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
const [x,y] = input[0].split(" ").map(Number)
let a = input.slice(1,1+x).map(el => el.split(" ").map(Number))
let b = input.slice(1+x).map(el => el.split(" ").map(Number))
let result = []

for(let i = 0; i < x; i++){
    result[i] = []
    for(let j = 0; j < y; j++){
        result[i].push( a[i][j] + b[i][j] )
    }
    result[i] = result[i].join(" ")
}

console.log(result.join("\n"))