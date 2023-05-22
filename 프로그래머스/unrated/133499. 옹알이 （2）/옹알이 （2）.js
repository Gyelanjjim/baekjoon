function solution(babbling) {
    let arr = ["aya", "ye", "woo", "ma"]
    const dont = ["ayaaya", "yeye", "woowoo", "mama"]
    
    // 연속발음 제외하기
    for(let i=0; i<dont.length; i++){
        const regex = new RegExp(`${dont[i]}`, 'g')
        for(let j=0; j<babbling.length; j++){
            if(babbling[j].match(regex)) babbling[j] = ''             
        }
    }
    babbling = babbling.filter(v=>v)
      
    // 있는발음 제외하기
    for(let i=0; i<babbling.length; i++){
        for(let j=0; j<arr.length; j++){
            babbling[i] = babbling[i].split(`${arr[j]}`).join(' ')          
        }        
        babbling[i] = babbling[i].trim()
    }
    return babbling.filter(v=>!v).length
}