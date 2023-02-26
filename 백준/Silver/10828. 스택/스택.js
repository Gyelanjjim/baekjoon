const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
                .split('\n').slice(1).map(el => el.split(' '))

class Stack{
  constructor(){
    this.data = [];
    this.index = -1;
  }
  push(value){
    this.index += 1;
    this.data[this.index] = value;
  }
  size(){
    return this.index + 1
  }
  isEmpty(){
    return !this.size() ? 1 : 0
  }
  top(){
    return !this.size() ? -1 : this.data[this.index];
  }
  pop(){
    if(!this.size()){
      return -1
    }else{
      this.index -= 1;
      return this.data.pop();  
    }  
  }
}

const solution = input => {
  let stack = new Stack()
  let result = []
  input.forEach(el => {
    if(el[0] === 'push'){
      stack.push( el[1] )
    }else if(el[0] === 'top'){
      result.push( stack.top() )
    }else if(el[0] === 'size'){
      result.push( stack.size() )
    }else if(el[0] === 'empty'){
      result.push( stack.isEmpty() )
    }else if(el[0] === 'pop'){
      result.push( stack.pop() )
    }
  })
  return result.join('\n') 
}

console.log(solution(input))