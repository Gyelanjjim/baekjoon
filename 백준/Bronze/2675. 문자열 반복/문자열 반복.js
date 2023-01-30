const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input.slice(1).map(el => el.split(" "))
for(let i = 0; i < arr.length; i++){
    let count = Number(arr[i][0])
    console.log( [...arr[i][1]].map(el => el.repeat(count)).join("") )
}