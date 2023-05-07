function solution(l,r){
  const length = 63
  const arr = Array.from({length}, (_, i) => (i+1).toString(2)*5).filter(el => el >= l && el <= r);
  return arr.length ? arr : [-1]
}