function solution(str1, str2) {
    let str = ''
    str1.split('').forEach((el,i) => {
        str += el + str2[i]
    })
    return str
}