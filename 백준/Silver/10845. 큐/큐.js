const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                .split('\n').slice(1)

const solution = input => {
  let queue = []
  let obj = {
    'push': (val) => queue.push(val),
    'front':() => queue[0] || -1, 
    'back': () => queue[queue.length-1] || -1,
    'pop': () => queue.shift() || -1,
    'size': () => queue.length,
    'empty': () => queue.length === 0 ? 1 : 0
  }
  let result = []
  
  input.forEach(el => {
    if(el.startsWith('pu')){
      obj['push']( el.split(' ')[1] )
    }else{
      result.push( obj[el]() )
    }
  })
  return result.join('\n') 
}
console.log(solution(input))