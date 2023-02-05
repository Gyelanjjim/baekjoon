const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim()

const solution = num => {
  if(num % 5 === 0){
    return num / 5
  }else if(num % 5 === 1){
    return num / 5 < 1 ? -1 : parseInt(num/5) + 1
  }else if(num % 5 === 2){
    return num / 5 < 2 ? -1 : parseInt(num/5) + 2
  }else if(num % 5 === 3){
    return parseInt(num/5) + 1
  }else if(num % 5 === 4){
    return num / 5 < 1 ? -1 : parseInt(num/5) + 2
  }
     
}

console.log(solution(input))