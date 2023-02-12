const fs = require('fs')
let [h, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)
h === 0 ? m < 45 ? [h, m] = [23, 60 + m - 45] : m -= 45 
    : m < 45 ? [h, m] = [h-1, 60 + m - 45] : m -= 45
console.log(h, m)