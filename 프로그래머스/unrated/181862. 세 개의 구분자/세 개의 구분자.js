function solution(myStr) {
  let answer = []
  let s = 0

  for (let i=0; i<myStr.length; i++) {
    if (myStr[i] === "a" || myStr[i] === "b" || myStr[i] === "c") {
      let str = myStr.slice(s, i)
      if (str.length > 0) answer.push(str)
      s = i + 1
    }
  }

  let lastStr = myStr.slice(s)
  if (lastStr.length > 0) answer.push(lastStr)

  return answer.length === 0 ? ["EMPTY"] : answer
}
