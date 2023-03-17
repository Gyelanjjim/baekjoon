function solution(cacheSize, cities) {
  let arr = Array(cacheSize).fill('')
  let answer = 0
  cities.forEach((el) => {
    el = el.toLowerCase()
    if(cacheSize === 0){
      answer += 5  
    }else{
      if(arr.indexOf(el) !== -1){
        arr.splice(arr.indexOf(el), 1)
        arr.push(el)
        answer += 1  
      }else if(arr.indexOf(el) === -1){
        arr.shift(el)
        arr.push(el)
        answer += 5
      }
    }
  })
  
  return answer
}