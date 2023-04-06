const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const arr = [500, 100, 50, 10, 5, 1]
const solution = (arr, input) => {
  let rest = 1000 - input
  let count = 0
  arr.forEach((el,i) => {
    count += parseInt(rest / el)
    rest = rest % el
  })
  return count
}
console.log(solution(arr, input))