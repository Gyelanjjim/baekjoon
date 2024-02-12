const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

const solution = ((input) => {
    const arr = [] ;
    const inputA = input.split('\n').map(v=>v.split(' ').map(v=>+v));          
    input.split('\n').map(v=>v.split(' ').map(v=>+v).sort((a,b)=>b-a)).forEach(v=>arr.push(v[0])); 

    const max = Math.max(...arr);
    let [x,y] = [0, 0]
    inputA.forEach((v,i)=>{
        if(v.indexOf(max) !== -1) [x,y] = [i+1, v.indexOf(max)+1];
    })
    
    return [max, `${x} ${y}`].join('\n');
    
})
(input)

console.log(solution);