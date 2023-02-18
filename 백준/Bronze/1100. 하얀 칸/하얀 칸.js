const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
                .split('\n').map(el => el.split(''))

const solution = input => {
  let count = 0;
  for(let i = 0; i < input.length; i++){
    if(i % 2 === 0){
      for(let j = 0; j < input[i].length; j+=2){
        if(input[i][j] === 'F') count++
      }  
    }else{
      for(let j = 1; j < input[i].length; j+=2){
        if(input[i][j] === 'F') count++
      }  
    }   
  }
  return count
}

console.log( solution(input) )