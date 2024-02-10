const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    const count = parseInt(input/4);
    let str = [];
    for(let i=0; i<count; i++){
        str.push('long');
    }
    return `${str.join(' ')} int`
})(input);

console.log(solution);