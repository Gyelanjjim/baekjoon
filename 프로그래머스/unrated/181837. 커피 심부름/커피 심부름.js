function solution(order) {
    return order.map(v => v.match(/am|ng/g) ? 4500 : 5000).reduce((a,b)=>a+b,0)
}