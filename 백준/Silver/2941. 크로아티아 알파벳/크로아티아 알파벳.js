const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (str) => {
    const arr = [ "c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z=" ]
    let sum = 0
    for(let el of arr) {
        let newArr = str.split(el)
        sum += newArr.length - 1
        str = newArr.join("@")
    }
    str = str.replaceAll("@", "")
    sum += [...str].length
    return sum
}
console.log( solution(input) )