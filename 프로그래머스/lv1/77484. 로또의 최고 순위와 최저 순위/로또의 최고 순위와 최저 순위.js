function solution(lottos, win_nums) {
    let set = new Set(win_nums)
    let zeros = 0
    lottos.sort((a,b)=>b-a)
    for(let i = 0; i<lottos.length; i++){
        const v = lottos[i]
        if(set.has(v)){
            set.delete(v)
        }else if(!v){
            zeros++
        }
    }
    return set.size < 5 ? [set.size-zeros+1, set.size+1] : [6-zeros||1, 6]
}