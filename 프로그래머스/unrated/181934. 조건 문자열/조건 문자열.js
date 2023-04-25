function solution(ineq, eq, n, m) {
    const op = eq === '!' ? ineq : ineq+eq
    const cmp = {
        '>=': (a,b) => a >= b,
        '<=': (a,b) => a <= b,
        '>': (a,b) => a > b,
        '<': (a,b) => a < b        
    }
    return Number(cmp[op](n,m)) 
}