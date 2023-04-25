function solution(num_list) {
    let [odd, even] = [0, 0]
    num_list.forEach((el, i)=>{
        i % 2 === 0 ? odd += el : even += el
    })
    return odd > even ? odd : even
}   