const solution = (s,n) => {
  let str = ''
  s.split('').forEach(el => {
    let code = el.charCodeAt()
    if(code === 32){
      str += ' '
    }else if(code >= 65 && code <= 90){
      code += n
      if(code  > 90){
        code = (code - 65) % 26 + 65
      } 
      str += String.fromCharCode(code)
    }else if(code >= 97 && code <= 122){
      code += n
      if(code > 122){
        code = (code - 97) % 26 + 97
      }
      str += String.fromCharCode(code)
    }
  })
  return str
}
