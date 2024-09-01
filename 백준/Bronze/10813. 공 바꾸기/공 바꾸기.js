const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
    const lines = input.split("\n");
    const [n,m] = lines[0].split(" ");
    const ranges = lines.slice(1).map(v => v.split(" "));
    let baskets = Array.from({ length: n }, (v, i) => i+1);

    for (const [a, b] of ranges) {
        const [i, j] = [a-1, b-1];
        const [ball1, ball2] = [baskets[a-1], baskets[b-1]];
        [baskets[a-1], baskets[b-1]] = [ball2, ball1];
    }    
    return baskets.join(" ")
}

console.log(solution(input))