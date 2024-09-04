const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
  const arr = input.split('');
  let result = ''
  let tag = [];
  let word = [];
  let isOpen = false
  for (const i in arr) {
    const v = arr[i]
    if (v === '<') {
      isOpen = true;
      result += word.reverse().join('')
      word = []
    } 
    if (v !== '<' && v !== '>' && isOpen) {
      tag.push(v)
    }
    if (v === '>') {
      isOpen = false;
      result += `<${tag.join('')}>`
      tag = []      
    }
    if (!isOpen && v !== ' ' && v !== '<' && v !== '>') {
      word.push(v)
    }
    if (!isOpen && v === ' ') {
      result += word.reverse().join('')
      result += v
      word = []
    }
    if (+i == arr.length-1) {
      result += word.reverse().join('')
    }
  }
  
  return result
}

console.log(solution(input))
