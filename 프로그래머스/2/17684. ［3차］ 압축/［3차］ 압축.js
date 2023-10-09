function solution(msg) {
    const dict = {}
    const answer = []
    let val;
    for(let i=1; i<=26; i++){
        dict[ String.fromCharCode(i+64) ] = i
    }
    let [s, e] = [0, 1]
    while(e < msg.length+1){
      const char = msg.slice(s,e)
      if(dict[char]){
        val = dict[char]
        e++
        if(e === msg.length+1) answer.push(val)
      }else{
        dict[char] = Object.keys(dict).length+1
        answer.push(val)
        s = e-1
      }
    }
    return answer
}