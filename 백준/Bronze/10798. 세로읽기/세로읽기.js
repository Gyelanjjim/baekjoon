const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    const arr = input.split('\n').map(v=>v.split(''));
    const max = Math.max(...arr.map(v=>v.length));
    let result = '';
    for(let j=0; j<max; j++){
        for(let i=0; i<arr.length; i++){
            const row = arr[i];
            const ch = row.shift();
            if(ch) result += ch;
        }    
    }    
    return result;
})
(input);

console.log(solution);