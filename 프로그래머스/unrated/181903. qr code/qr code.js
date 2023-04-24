function solution(q, r, code) {
    return code.split('').map((el, i)=>{
        return i % q === r ? el : ''
    }).join('')
}