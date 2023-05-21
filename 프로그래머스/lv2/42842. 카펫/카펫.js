function solution(brown, yellow) {
    const b = brown/2
    let i = 2
    while(i<=b){
        if((i-1)*(b-i-1) === yellow) return [b-i+1, i+1]
        i++
    }   
    // 24,24 -> brown/2 = 12 | (7+1),(5+1) = 8,6
    /*
        2,10 3,11 -> 1*9 = 9
        3,9 4,10  -> 2*8 = 16    
        4,8 5,9   -> 3*7 = 21
        5,7 6,8   -> 4*6 = 24
        6,6 7,7   -> 5*5 = 25
        
    */
}