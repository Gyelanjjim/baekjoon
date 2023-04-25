function solution(arr, intervals) {
    let result = []
    intervals.forEach(el => {
        const [s,e] = el
        result.push(...arr.slice(s,e+1))
    })
    return result
}