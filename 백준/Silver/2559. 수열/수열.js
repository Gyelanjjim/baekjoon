const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [[n, k], arr] = input.split('\n').map(v => v.split(' ').map(Number));
  let [s,e] = [0, n-1];
  let max = null;
  for (let i=0; i<=n-k; i++) {
    // const current =  arr.slice(i, i+k).reduce((a,c) => a+c, 0) // 메모리 초과
    let sum = 0
    for (let j = i; j<i+k; j++) {
      sum += arr[j]
    }
    if (max === null || max < sum) max = sum
  }
  
  return max
};

console.log(solution(input));