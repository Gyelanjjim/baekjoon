const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

const solution = (n,m) => {
    let [big, small] = [0,0]
    big = Math.max(n,m) 
    small = Math.min(n,m)     
    return (small-1) + (big-1)*small
}
console.log(solution(n, m))
