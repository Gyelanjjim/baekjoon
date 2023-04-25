function solution(num_list) {
    let count = 0
    for(let v of num_list){
        while(v !== 1){
            v = parseInt(v / 2)
            count++
        }
    }
    return count
        
}