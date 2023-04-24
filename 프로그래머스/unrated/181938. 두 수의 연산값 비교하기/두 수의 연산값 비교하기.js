function solution(a, b) {
    const [x, y] = [Number(`${a}${b}`), 2*a*b]
    return x >= y ? x : y
}