function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const week = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    const na = month.slice(0,a-1).reduce((ac,v)=>ac+v,b) % 7
    return week[na]   
}