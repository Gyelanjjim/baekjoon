function solution(operations){
  let queue = []
  let obj = {
    'I': (val) => { 
      queue.push( Number(val) )
      queue.sort((a,b) => a-b)
    },
    'D -1': () => queue.shift(),
    'D 1': () => queue.pop(),
    'front': () => queue[0] || 0, 
    'back': () => queue[queue.length-1] || 0,
  }
  
  operations.forEach(el =>
    el.charAt(0) === 'I' ?
      obj['I'](el.split(' ')[1]) : obj[el]()
  )
  return [ obj['back'](), obj['front']() ] 
}