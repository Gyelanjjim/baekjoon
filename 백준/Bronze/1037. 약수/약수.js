const fs = require('fs')
const [count, input] = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n')

const solution = (count, input) => {
  input = input.split(' ').sort((a, b) => a - b)
  return count === '1' ? input ** 2 : input[0] * input[count-1]
}

console.log(solution(count, input))

