function isValid(s){
  const arr = ['()', '{}', '[]'];
  let i=0;
  while(i<arr.length){
    if(s.indexOf(arr[i]) !== -1){	
      s = s.split(arr[i]).join("");	
      i=0;	
    }else{
      i++;
    }
  }
  return s === "";
}

function solution(s) {
    let count = 0;
    const 회전수 = s.length;
    for (let i=0; i<회전수; i++) {
      s = s.slice(1) + s[0]
      if (isValid(s)) count++
    }
    return count
}