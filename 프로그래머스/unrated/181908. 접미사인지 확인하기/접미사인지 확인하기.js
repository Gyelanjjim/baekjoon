function solution(my_string, is_suffix) {
    const n = is_suffix.length
    return my_string.slice(-n) === is_suffix ? 1 : 0
}