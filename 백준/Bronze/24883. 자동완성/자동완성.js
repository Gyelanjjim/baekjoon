const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  const re = new RegExp(/[nN]/g)
  if(re.test(input)) return 'Naver D2'
  return 'Naver Whale'
}

console.log(solution(input))

