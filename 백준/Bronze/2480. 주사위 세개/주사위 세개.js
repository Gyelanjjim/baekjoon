const fs = require("fs")
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort();
let result = 0;
if(a === b && a === c){
    result = 10000 + a * 1000
}else if(a === b || b === c){
    result = 1000 + b * 100        
}else{
    result = c * 100
}
console.log(result)