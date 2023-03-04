const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
                .map(el => el.replace(/[a-zA-Z0-9. ]/gi, ''))
input.pop()

const solution = (s) => {
  const arr = ['()', '{}', '[]'];
  return s.map(el => {
      let i=0;
      while(i<arr.length){	// (1)
        if(el.indexOf(arr[i]) !== -1){	// (2)
          el = el.split(arr[i]).join("");	// (3)
          i=0;	
        }else{
          i++;	// (4)
        }
      }
      return el === "" ? 'yes' : 'no';	// (5)    
  }).join('\n')

}

console.log(solution(input))