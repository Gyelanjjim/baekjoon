const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    for(let i = 0; i<input.length/2; i++){
        if(input[i] !== input[input.length-1-i]) return 0;
    }
    return 1;
})
(input)

console.log(solution);