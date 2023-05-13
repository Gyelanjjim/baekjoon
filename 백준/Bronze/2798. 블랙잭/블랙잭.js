const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = (input) => {
  const [a, b] = input.split('\n')
  const max = a.split(' ')[1]
  const nums = b.split(' ').map(Number)
  let arr = []
  for(let i=0; i<nums.length-2; i++){
      for(let j=i+1; j<nums.length-1; j++){
          for(let k=j+1; k<nums.length; k++){
              const sum = nums[i] + nums[j] + nums[k]
              if(sum <= max) arr.push(sum)
          }
      }
  }
  return arr.sort((a,b)=>a-b)[arr.length-1]
}

console.log(solution(input))