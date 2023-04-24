function solution(num_list) {
    let [odd, even] = ['', '']
    num_list.forEach(el => {
        el % 2 === 0 ? even += el : odd += el
    })
    return +odd + +even
}