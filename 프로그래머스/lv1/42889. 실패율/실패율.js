const sum = (obj, num) => {
  let re = 0
  for(let i = 0; i < num; i++){
    re += obj[i] || 0
  }
  return re
}

const solution = (N, stages) => {
  let len = N.toString().length
  let count = {}
  let fail = []
  
  stages.forEach(el => {
    count[el] = ( count[el] || 0 ) + 1   
  })
  
  for(let i = 1; i <= N; i++){
    let j = ('0'.repeat(len-1) + i).slice(-len)
    let rate = count[i] / (stages.length - sum(count, i)) || 0
    let ele = fail.find(el => el[0] === rate )
    ele ? ele.push(j) : fail.push([rate, j])      
  }
  
  return fail.sort().reverse().map(el => el.slice(1).join(' ')).join(' ').split(' ').map(Number)
}
