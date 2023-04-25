function solution(arr) {
    let [c, r] = [arr.length, arr[0].length]
    
    if(c-r === 0) return arr
    if(c-r < 0){
        for(let i=0; i<r-c; i++){
            arr.push(Array(r).fill(0))        
        }
        return arr
    }else{
        for(let i=0; i<c; i++){
            for(let j=0; j<c-r; j++){
                arr[i].push(0)                  
            }
        }
        return arr
    }
}