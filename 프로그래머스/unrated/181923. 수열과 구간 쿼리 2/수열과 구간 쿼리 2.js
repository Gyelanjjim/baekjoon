function solution(arr, queries) {
    let re = []
    for(let i=0; i<queries.length; i++){
        const [s,e,k] = queries[i]
        const el = arr.slice(s,e+1).sort((a,b)=>a-b).find(v => v > k)
        el !== undefined ? re.push(el) : re.push(-1)        
    }
    return re
}