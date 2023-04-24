function solution(arr, k) {
    return arr.map(el => k % 2 === 1 ? el*k : el+k)  
}