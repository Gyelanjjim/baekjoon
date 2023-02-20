const fs = require('fs')
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim()
                .split(' ').map(el => el.split(''))

const solution = (a, b) => {
  let [l, r] = [0, 0]
    a.forEach(el => l += Number(el))
    b.forEach(el => r += Number(el))
  return l * r
}

console.log(solution(a, b))