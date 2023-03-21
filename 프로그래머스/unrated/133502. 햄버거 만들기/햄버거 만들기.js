function solution(ingredient) {
    const stack = []
    let answer = 0
    ingredient.forEach(el => {
      stack.push(el)
      if(stack.slice(-4).join('') === '1231'){
        stack.splice(-4)
        answer++
      }
    })
    return answer
}