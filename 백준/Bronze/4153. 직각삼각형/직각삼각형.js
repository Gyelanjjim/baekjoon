const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
                .map(el => el.split(' ').sort((a,b)=>b-a))
input.pop()
const solution = input => {
  let result = []
  input.forEach(el => {
    if(el[0]**2 === el[1]**2 + el[2]**2){
      result.push('right')
    }else{
      result.push('wrong')
    }
    
  })
  return result.join('\n')
}
console.log(solution(input))
