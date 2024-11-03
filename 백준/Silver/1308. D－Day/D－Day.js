const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const [start, end] = input.split('\n').map(date => {
    const [year, month, day] = date.split(' ').map(Number);
    return new Date(year, month - 1, day);
  });

  const thousandYearsLater = new Date(start);
  thousandYearsLater.setFullYear(thousandYearsLater.getFullYear() + 1000);

  if (end >= thousandYearsLater) {
    return 'gg';
  } else {
    const diffInMilliseconds = end - start;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return `D-${diffInDays}`;
  }
};

console.log(solution(input));
