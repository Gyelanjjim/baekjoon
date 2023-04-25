function solution(arr, queries) {
    queries.forEach(el => {
        const [s,e] = el
        for(let i=s; i<=e; i++){
            arr[i]++
        }
    })
    return arr
}