function solution(arr, delete_list) {
    delete_list.forEach(el => {
        arr = arr.filter(v => v !== el)
    })
    return arr
}