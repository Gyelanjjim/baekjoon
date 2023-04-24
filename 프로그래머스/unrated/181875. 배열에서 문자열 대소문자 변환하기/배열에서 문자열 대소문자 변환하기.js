function solution(strArr) {
    return strArr.map((el,i) => i % 2 === 1 ? el.toUpperCase() : el.toLowerCase())
}