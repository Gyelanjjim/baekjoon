function solution(myString, pat) {
    let nPat = ''
    for(let i=0; i<pat.length; i++){
        pat[i] === "A" ? nPat += "B" : nPat += "A"
    }
    return myString.includes(nPat) ? 1 : 0
}