const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const solution = (input) => {
  let [x,y] = input.split(' ')
  const days = ['SUN','MON','TUE','WED', 'THU', 'FRI', 'SAT']  
  const num = new Date(`2007-${x}-${y}`).getDay()
  return days[num]
}

console.log(solution(input))