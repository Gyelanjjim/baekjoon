function solution(number, limit, power) {
  return [...new Array(number).keys()]
    .map(el => divisorCount(el+1) > limit ? power : divisorCount(el+1))
    .reduce((a,b)=>a+b, 0)
}

function divisorCount(number) {
  if(number === 1) return 1
  let a = {}
  let i = 2
  while(number !== 1){
    if(number%i === 0){
      a[i] = (a[i] || 1) + 1
      number /= i
    }else{
      i++  
    } 
  }
  return Object.values(a).reduce((a,b)=> a*b, 1)
}