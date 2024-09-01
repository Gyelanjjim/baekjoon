const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const lines = input.split("\n");
    const [n, m] = lines[0].split(" ");
    const ranges = lines.slice(1).map(v => v.split(" "));
    let baskets = Array.from({ length: n }, (v, i) => i+1);

    for (const [start, end] of ranges) {
        let left = [];
        let right = [];
        if (start != 1) {
            left = baskets.slice(0, start-1)
        }
        let center = baskets.slice(start-1, end).reverse();
        right = baskets.slice(end);
        baskets = left.concat(center, right)
    }    
    return baskets.join(" ")
}

console.log(solution(input))
