const fs = require('fs')
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

const solution = (x, y) => {
    const revX = x.split("").reverse().join("")
    const revY = y.split("").reverse().join("")
    let result = Number(revX) + Number(revY) 
    
     return Number(result.toString().split("").reverse().join(""))
}

console.log(solution(x, y))