function solution(arr) {
    const s = arr.indexOf(2)
    let e = s
    arr.forEach((el,i)=>{
        if(el === 2) e = i
    })
    return s === -1 ? [-1] : arr.slice(s,e+1)
}