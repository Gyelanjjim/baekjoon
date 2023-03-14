const solution = s => {
  let [zero, one, count] = [0, 0, 0]
  while(s != 1){
    one = 0
    for(let i=0; i<s.length; i++){
      s.charAt(i) === '0' ? zero++ : one++
    }
    s = one.toString(2)
    count++
  }
  return [count, zero]
  // s에 대하여 0의 개수를 구한다
  // s에 대하여 1의 개수를 구한다
  // s에 대하여 1의 개수를 2진법으로 변환하고 s에 재할당한다
  // 위를 반복한다 언제까지? s가 1이 될 때까지
  // 최종. 진법 변환 횟수와 제거한 0의 개수를 반환한다
}
