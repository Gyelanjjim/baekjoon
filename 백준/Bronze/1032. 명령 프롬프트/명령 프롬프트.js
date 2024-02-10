const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
  const arr = input.split('\n');
  const count = input.split('\n')[0];
  // console.log(arr)
  const inp = arr.slice(1);
  const strLen = inp[0].length;
  let result = ''

  for(let i=0; i<strLen; i++){
    let character = [];
    for(let j=0; j<count; j++){
      character.push(inp[j][i])
    }
    const k = new Set(character)
    if(k.size === 1){
      result += k.values().next().value
    }else{
      result += '?'
    }
  }
  return result
  
})(input)
console.log(solution)