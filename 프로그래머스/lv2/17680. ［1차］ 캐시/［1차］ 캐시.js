function solution(cacheSize, cities) {
  let arr = Array(cacheSize).fill('')
  let answer = 0
  cities.forEach((el) => {
    el = el.toLowerCase()
    if(cacheSize === 0){
      answer += 5  
    }else{
      const idx = arr.indexOf(el)
      if(idx !== -1){
        arr.splice(idx, 1)
        arr.push(el)
        answer += 1  
      }else if(idx === -1){
        arr.shift()
        arr.push(el)
        answer += 5
      }
    }
  })
  return answer
}