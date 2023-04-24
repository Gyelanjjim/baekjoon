function solution(a, b, c) {
    const three = a+b+c
    const two = (a+b+c)*(a**2+b**2+c**2)
    const one = 27*(a**6)
    
    return (a !== b) ? (b !== c) ? (c !== a) ? three : two : two : (b !== c) ? two : one
}