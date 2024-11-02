const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const names = input.split('\n').slice(1)
  const map = {
    Algorithm:	204,
    DataAnalysis:	207,
    ArtificialIntelligence:	302,
    CyberSecurity:	'B101',
    Network:	303,
    Startup:	501,
    TestStrategy:	105
  }
  return names.map(v => map[v]).join('\n')
};

console.log(solution(input));

