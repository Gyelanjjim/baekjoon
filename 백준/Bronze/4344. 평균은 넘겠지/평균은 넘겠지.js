const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const caseCount = Number( input[0] )
const cases = input.slice(1).map(el => el.split(" ").map(Number))
let result = []
for(let i = 0; i < caseCount; i++){
    let max = cases[i][0]
    let arr = cases[i].slice(1)
    let avg = arr.reduce((a,b) => a+b, 0) / max
    let n = 0
    for(let j = 0; j < max; j++){
        if( arr[j] > avg ) n++
    }
    result.push( ( n / max * 100 ).toFixed(3) +"%" )
}
console.log(result.join("\n"))