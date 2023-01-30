const fs = require('fs');
const input = Number( fs.readFileSync("/dev/stdin").toString().trim() );
let i = 0
const sum = n => 3 * n * ( n + 1 ) + 1
while(true){
    if(input <= sum(i)){
        console.log(i+1)
        break;
    } 
    i++
}