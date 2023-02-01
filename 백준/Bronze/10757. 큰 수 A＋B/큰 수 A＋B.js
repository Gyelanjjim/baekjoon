const fs = require('fs')
const [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(" ")

const sum = (str1, str2) => {
	return `${BigInt(str1) + BigInt(str2)}`
	// return ( BigInt(str1) + BigInt(str2) ).toString() 
}

console.log( sum(a, b) )
