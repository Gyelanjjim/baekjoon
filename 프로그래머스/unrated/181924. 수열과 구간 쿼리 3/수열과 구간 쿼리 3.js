function solution(arr, queries) {
    for(let [i,j] of queries){
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}