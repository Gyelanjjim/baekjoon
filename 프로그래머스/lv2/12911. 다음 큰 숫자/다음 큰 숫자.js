function solution(n) {
    const nOne = n.toString(2).replaceAll(0,'').length
    let biggerOne = 0;
    let biggerN = 0;
    do{
        n++
        biggerN = n.toString(2)
        biggerOne = biggerN.replaceAll(0,'').length
    }while(nOne !== biggerOne)
    
    return n;
}