const fs = require('fs');
const input = Number( fs.readFileSync("/dev/stdin").toString().trim() );
let result = 1
for(let i = 1; i<=input; i++){
    result *= i
}
console.log(result)