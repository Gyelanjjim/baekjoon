const fs = require('fs');
const input = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

const solution = (n) => {
    const count = n * n * n;
    console.log(count.toString());
    console.log(3);
};

solution(input);