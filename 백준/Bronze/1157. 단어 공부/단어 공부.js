const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase().split("");
const count = input.reduce( (ac, v) => {
    ac[v] = ( ac[v] || 0 ) + 1 
    return ac
  }, {})
let obj = {}
for(let [k,v] of Object.entries(count)){
    obj[v] = ( obj[v] || "" ) + k
}
let max = Object.keys(obj).sort((a,b) => b - a)[0]

obj[max].length > 1 ? console.log("?") : console.log(obj[max])