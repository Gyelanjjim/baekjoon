function solution(arr, idx) {
    const a = arr.slice(idx).findIndex(el=> el === 1)
    return a === -1 ? -1 : a + idx
}