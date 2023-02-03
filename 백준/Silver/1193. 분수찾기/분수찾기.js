const fs = require("fs")
const input = Number( fs.readFileSync("/dev/stdin").toString().trim() )

const solution = input => {
  const sum = n => n*(n+1)/2  
  let i = 1;
  while(sum(i) < input){
    i++
  }
  let a = input - sum(i-1)
  return (i+1) % 2 === 1 ? [a, i+1-a].join("/") : [i+1-a, a].join("/")    
}
 
console.log( solution(input) )