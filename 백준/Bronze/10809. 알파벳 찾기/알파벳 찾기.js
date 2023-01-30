const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const char = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  console.log( char.map( (el,i) => el = line.indexOf(char[i]) ).join(" ") ) 
  rl.close();
}).on("close", () => {
  process.exit();
});