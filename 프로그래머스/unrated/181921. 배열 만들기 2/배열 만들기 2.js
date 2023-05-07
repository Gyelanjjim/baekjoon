function solution(l,r){
  const length = 63
  const arr = Array.from({length}, (_, i) => (i+1).toString(2)*5);
  let [s, e] = [-1,-1]
  for(let i=0; i<length;i++){
    if(arr[i] >= l){
      s = i;
      break;
    } 
  }
  for(let i=length-1; i>=0;i--){
    if(arr[i] <= r){
      e = i;
      break;
    } 
  }
  
  return arr.slice(s,e+1).length === 0 ? [-1] : arr.slice(s,e+1) 
}