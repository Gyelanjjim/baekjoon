function solution(new_id) {
    // 1. 소문자 치환
    // s = s.toLowerCase()
    new_id = new_id.toLowerCase()
      
    // 2. 소문자,숫자,-,_,. 외 제거
    const set = new Set([45,46,...Array.from({length:10}, (_, i) => i+48),95, ...Array.from({length:26}, (_, i) => i+97)])
    new_id = [...new_id]
    for(let i=0; i<new_id.length; i++){
        const isOk = set.has(new_id[i].charCodeAt())
        if(!isOk) new_id[i] = '' 
    }
    new_id = new_id.join('')
    // 3. 연속된 마침표는 하나의 마침표
    let s = ''
    for(let i=0; i<new_id.length; i++){
        s += (new_id[i])
        if(s.slice(-2) === '..') s = s.substring(0, s.length-1)
    }
    // 4. 처음, 끝 마침표 제거
    if(s.indexOf('.') === 0) s = s.slice(1)
    if(s.lastIndexOf('.') === s.length-1) s = s.slice(0,s.length-1)
    
    // 6. 16자 이상
    if(s.length >= 16) s = s.slice(0,15)
    // 4. 처음, 끝 마침표 제거
    if(s.indexOf('.') === 0) s = s.slice(1)
    if(s.lastIndexOf('.') === s.length-1) s = s.slice(0,s.length-1)
    // 5. 빈문자열
    if(s.length === 0) s = 'a'
    // 7. 2자 이하
    while(s.length <= 2) {
        s += s[s.length-1] 
    }
    return s
}