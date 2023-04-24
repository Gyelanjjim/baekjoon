function solution(a, b) {
    const [nu, rnu] = [`${a}${b}`, `${b}${a}`].map(Number)
    return nu >= rnu ? nu : rnu
}