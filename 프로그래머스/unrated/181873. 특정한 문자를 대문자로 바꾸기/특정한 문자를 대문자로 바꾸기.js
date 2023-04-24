function solution(my_string, alp) {
    return my_string.split('')
        .map(el=> el === alp ? el.toUpperCase() : el).join('')
}