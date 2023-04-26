function solution(arr, k) {
    const set = new Set(arr)
    if(set.size < k){
        const sub = Array(k-set.size).fill(-1)
        return [...set, ...sub]
    }
    return [...set].slice(0,k)
}