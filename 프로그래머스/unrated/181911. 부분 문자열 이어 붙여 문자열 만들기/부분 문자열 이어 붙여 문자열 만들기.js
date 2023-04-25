function solution(my_strings, parts) {
    return parts.map((el,i) => {
        const [s,e] = el
        return my_strings[i].slice(s,e+1)
    }).join('')
}