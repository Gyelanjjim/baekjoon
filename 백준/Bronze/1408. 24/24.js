const fs = require('fs')
const [ curr, dead ] = fs.readFileSync('/dev/stdin').toString().trim()
                         .split('\n').map(el => el.split(':').map(Number))

const solution = (curr, dead) => {
  let [ch, cm, cs] = curr
  let [dh, dm, ds] = dead
  let [rh, rm, rs] = []
  if(ds >= cs){
    rs = ds - cs
  }else{
    rs = 60 + ds - cs
    dm -= 1
  }
  if(dm >= cm){
    rm = dm - cm
  }else{
    rm = 60 + dm - cm
    dh -= 1
  }
  if(dh >= ch){
    rh = dh - ch
  }else{
    rh = 24 + dh - ch
  }
  
  return [rh, rm, rs].map(el => ('0' + el).slice(-2)).join(':')
}
console.log(solution(curr, dead))