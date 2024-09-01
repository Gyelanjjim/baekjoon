const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const lines = input.split("\n");
    const [n,m] = lines[0].split(" ");
    const ranges = lines.slice(1).map(v => v.split(" "));
    let baskets = Array.from({ length: n }, (v) => 0);

    for (const [i, j, k] of ranges) {
        for (let idx = i-1; idx <= j-1; idx++) {
            baskets[idx] = k
        }
    }    
    return baskets.join(" ")
}

console.log(solution(input))