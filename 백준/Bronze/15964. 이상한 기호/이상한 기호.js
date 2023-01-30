const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [A, B] = line.split(" ").map(Number)  
  console.log(A**2 - B**2);
  rl.close();
}).on("close", () => {
  process.exit();
});