function solution(park, routes) {
  const dir = {
    E : (arr)=> arr.map((v,i)=> !i ? v : v+1),
    W : (arr)=> arr.map((v,i)=> !i ? v : v-1),
    S : (arr)=> arr.map((v,i)=> !i ? v+1 : v),
    N : (arr)=> arr.map((v,i)=> !i ? v-1 : v)
  }  
  const [iMax, jMax] = [park.length, park[0].length]

  let s = []
  let x = new Set()
  for(let i=0; i<iMax; i++){
    for(let j=0; j<jMax; j++){
      if(park[i][j] === "S") s = [i,j]
      if(park[i][j] === "X") x.add(`${i},${j}`)
    }
  }
  for(const v of routes){
      let i = 0
      // 임시값 ex
      let ex = s
      while(i < v[2]){
          let [a,b] = dir[v[0]](ex)
          // 장애물이 있거나 벽을 넘으면 
          if(x.has(`${a},${b}`) || a === -1 || b === -1 || a === iMax || b === jMax){
              // 임시 값을 초기화하고 while문을 중단하시오
              ex = s
              break
          // 그렇지 않으면 반복하시오
          }else{
              i++
              ex = [a,b]
          }
      }
      // 임시값이 현재 좌표로 확정됨
      s = ex
  }
  return s
}