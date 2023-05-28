function solution(priorities, location) {
    let origin = priorities.map((v,idx)=>[idx,v])
    let sorted = priorities.sort((a,b)=>b-a)
    let [i,j] = [0,0]
    let count = 0
    while(j<sorted.length){
        if(origin[i][1] !== sorted[j]){
            origin.push(origin[i])
            i++
        }else{
            count++
            if(origin[i][0] === location) break
            i++
            j++
        }
    }
    return count
}