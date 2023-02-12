const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number( input[0] )
const arr = input.slice(1).map(el => el.split("X").map(el => el.length))
const series = n => n * (n+1) / 2

for(let i = 0; i < count; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
        sum += series( arr[i][j] )
    }
    console.log(sum)
}