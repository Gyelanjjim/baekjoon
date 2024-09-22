const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const check = (d, temp) => {
    d.forEach(v => {
        const idx = temp.indexOf(v);
        if (idx === -1) {
            temp.push(v)
        } else {
            temp.splice(idx, 1)
        }
    })
}

const solution = (input) => {
  const spots = input.split('\n').map(v=>v.split(' '));
  const dX = [];
  const dY = [];
  const tempX = [];
  const tempY = [];
  
  spots.forEach(([x,y]) => {
    dX.push(x);
    dY.push(y);
  });
  
  check(dX, tempX);
  check(dY, tempY);
  
  return tempX[0] + ' ' + tempY[0];
}

console.log(solution(input))