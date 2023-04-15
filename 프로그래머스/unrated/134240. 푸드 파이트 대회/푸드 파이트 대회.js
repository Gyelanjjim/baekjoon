function solution(food){
  let [str1, str2] = ['', '']
  food.forEach((el,i)=>{
    str1 += `${i}`.repeat(parseInt(el/2))
    str2 = `${i}`.repeat(parseInt(el/2)) + str2
  })
  return `${str1}0${str2}`
}