const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    let [n, len, str] = input.split('\n');
    const pn = 'IO'.repeat(n)+'I';
    let count = 0;
    while(str.indexOf(pn) !== -1){
        count++;
        str = str.slice(str.indexOf(pn)+2);
    }    
    return count;
})
(input)

console.log(solution);