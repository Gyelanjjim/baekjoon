const solution = s => {
  let [zero, count] = [0, 0]
  while(s != 1){
    let one = 0
    for(let i=0; i<s.length; i++){
      s.charAt(i) === '0' ? zero++ : one++
    }
    s = one.toString(2)
    count++
  }
  return [count, zero]
}
