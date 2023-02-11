const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [h, m, s] = input[0].split(' ').map(Number)
const time = Number(input[1])

const solution = (h, m, s, t) => {
  s += t % 60
  const ss = s % 60
  m += parseInt(t/60) + parseInt(s/60)
  const mm = m % 60
  const hh = ( h + parseInt(m/60) ) % 24
  
  return [hh, mm, ss].join(' ')  
}

console.log( solution(h, m, s, time) )
