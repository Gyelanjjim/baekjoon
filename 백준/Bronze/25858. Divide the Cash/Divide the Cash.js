const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [사람수, 총상금] = input[0].split(' ').map(Number)
const 문제들 = input.slice(1).map(Number)

const solution = (n, m, arr) => {
    if (n === 1) return m
    let pNum = 0
    arr.forEach(el => pNum += el)
    const money = m / pNum
    const result = arr.map(el => money * el)
    return result.join('\n')
}

console.log(solution(사람수, 총상금, 문제들))