function solution(cards1, cards2, goal) {
    let [c1,c2] = [0,0]
    for(let i=0; i<goal.length; i++){
        const v = goal[i]
        if(cards1[c1] === v){
            c1++
        }else if(cards2[c2] === v){
            c2++
        }else{
            return 'No'   
        }
    }
    return 'Yes'   
}