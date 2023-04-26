function solution(order) {
    return order.map(v => v.match(/f/g) ? 5000 : 4500).reduce((a,b)=>a+b,0)
}