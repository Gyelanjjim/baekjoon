function solution(s) {
    let arr = []
    let obj = {}
    for(let i=0; i<s.length; i++){
        const c = s[i]
        if(obj[c] === undefined){
            obj[c] = { pre: -1, cur: i }
            arr.push(-1)
        }else{
            obj[c] = { pre: obj[c].cur, cur: i}
            arr.push(obj[c].cur - obj[c].pre)
        }
    }
    return arr
}