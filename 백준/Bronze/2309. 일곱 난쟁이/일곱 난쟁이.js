const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const nums = input.split('\n').map(Number).sort((a,b)=>a-b);
  const sum = nums.reduce((a,c)=>a+c,0);
  const remain = sum - 100;
  for (let i=0; i<nums.length; i++) {
    const val = nums[i];
    const val2 = remain - val;
    const j = nums.indexOf(val2);
    if (j !== -1 && j !== i) {
      const result = nums.slice(0,i).concat(nums.slice(i+1,j), nums.slice(j+1));
      return result.join('\n')
    }
  }
}


console.log(solution(input))