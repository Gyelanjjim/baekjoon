const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

const solution = (input) => {
  return input.map(s => {
    if (s[0]===')') return 'NO'
    let a = 0
    for(let i = 0; i<s.length; i++){
        s[i] === '(' ? a++ : a--
            if ( a < 0 ) return 'NO'
    }
    return a === 0 ? 'YES' : 'NO'
  }).join('\n')
}

console.log( solution(input) )