function solution(n){
  let s= [...Array(n).keys()]
  s[0]=0
  for(let i=2; i<=parseInt(n**.5)+1;i++){
    for (let j=2 ; j<=(n-i)/i+1; j++){
      s[i*j-1]=0
    }
  }
  return s.filter(x=>Boolean(x)).length;
}