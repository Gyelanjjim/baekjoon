const fs = require('fs');
const input = Number( fs.readFileSync("/dev/stdin").toString().trim() );
let result = []
for(let i = input; i>0; i--){
    result.push(i)    
}
console.log(result.join("\n"))
