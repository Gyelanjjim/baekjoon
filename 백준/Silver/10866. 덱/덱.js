const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                .split('\n').slice(1)

const solution = input => {
  let deque = []
  let obj = {
    'push_front': (val) => deque.unshift(val),
    'push_back': (val) => deque.push(val),
    'pop_front': () => deque.shift() || -1,
    'pop_back': () => deque.pop() || -1,
    'size': () => deque.length,
    'empty': () => deque.length === 0 ? 1 : 0,    
    'front':() => deque[0] || -1, 
    'back': () => deque[deque.length-1] || -1
  }
  let result = []
  
  input.forEach(el => {
    if(el.startsWith('pu')){
      let a = el.split(' ')
      obj[ a[0] ]( a[1] )
    }else{
      result.push( obj[el]() )
    }
  })
    
  return result.join('\n') 
}
console.log(solution(input))