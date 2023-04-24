function solution(num_list) {
    const n = num_list.length
    const add = num_list[n-1] > num_list[n-2] ? 
         num_list[n-1] - num_list[n-2] : num_list[n-1] * 2    
    return [...num_list, add]
}