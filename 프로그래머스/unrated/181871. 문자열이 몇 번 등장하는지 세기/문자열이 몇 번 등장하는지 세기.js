function solution(myString, pat) {
    let count = 0
    if(!myString.includes(pat)) return count
    for(let i = 0; i<myString.length; i++){
        myString = myString.slice(i)
        const k = myString.indexOf(pat)
        if(k !== -1){
            i = k   
            count++
        }else{
            break;
        }    
    }
    return count
}