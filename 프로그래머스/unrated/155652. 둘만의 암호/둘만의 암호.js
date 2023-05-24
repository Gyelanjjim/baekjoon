function solution(s, skip, index) {
    let result = ''
    
    for(let i=0; i<s.length; i++){
        let num = s[i].charCodeAt()
        let j = 0
        while(j<index){
            num++
            const char = String.fromCharCode((num- 97)%26+97)
            if(skip.indexOf(char) === -1) j++
            if(j === index) result += char
        }
    }
    return result
}