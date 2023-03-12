const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [pockN, probN] = input[0].split(' ').map(Number)
const arr = input.slice(1, 1 + pockN)
const prob = input.slice(1 + pockN)

const solution = (arr, prob) => {
  let dict = {}
  let answer = ''
  arr.forEach((el,i) => {
    dict[el] = i+1
    dict[i+1] = el
  })
  
  prob.forEach(el => {
    answer += '\n' + dict[el]
  })
  return answer.slice(1)
}

console.log(solution(arr, prob))
