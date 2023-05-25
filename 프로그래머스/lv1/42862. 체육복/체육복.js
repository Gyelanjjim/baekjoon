function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
    let students = new Set(Array.from({length:n},(_,i)=>i+1))
    lost.forEach(v=>students.delete(v))
    
    const idx = value => reserve.indexOf(value)
    let newLost = []
    for(const v of lost){
         if(idx(v) !== -1){
            reserve.splice(idx(v),1)
            students.add(v)
         }else{
            newLost.push(v)
         }
    }
    for(const v of newLost){
        if(idx(v-1) !== -1){
            reserve.splice(idx(v-1),1)
            students.add(v)
        }else if(idx(v+1) !== -1){
            reserve.splice(idx(v+1),1)
            students.add(v)
        }
    }
    return students.size
}