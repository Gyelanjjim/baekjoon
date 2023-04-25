function solution(arr, n) {
    const l = arr.length
    return l % 2 === 1 ? arr.map((el,i)=>i%2 === 0 ? el + n : el) : arr.map((el,i)=>i%2 === 1 ? el + n : el)
}