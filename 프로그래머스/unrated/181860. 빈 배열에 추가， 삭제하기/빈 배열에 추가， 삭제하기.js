function solution(arr, flag) {
    let re = []
    arr.forEach((v,i)=>
        flag[i] ? re = [...re, ...Array(v*2).fill(v)] : re.splice(-v,v)
    )
    return re
}