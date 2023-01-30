const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const num = line.split(" ").map(el => Number(el)**2).reduce((a,b) => a+b, 0)
  console.log(num % 10);
  rl.close();
}).on("close", () => {
  process.exit();
});