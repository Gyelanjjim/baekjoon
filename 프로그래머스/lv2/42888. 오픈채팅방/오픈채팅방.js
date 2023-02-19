const solution = record => {
  let userLog = []
  let users = []
  
  record.forEach(el => {
    el = el.split(' ')
    if(el[0] === 'Enter'){
      users[ el[1] ] = el[2]
      userLog.push( [el[1], '님이 들어왔습니다.'] )
    }else if(el[0] === 'Leave'){
      userLog.push( [el[1], '님이 나갔습니다.'] )
    }else{
      users[ el[1] ] = el[2]
    }
  }) 
  
  return userLog.map(el => {
    el[0] = users[ el[0] ]
    return el.join('')
  })
}
