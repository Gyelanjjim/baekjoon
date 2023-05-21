function solution(a, b) {
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = new Date(`2016-${a}-${b}`).getDay()
    return week[date];
    // const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    // const week = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    // const na = month.slice(0,a-1).reduce((ac,v)=>ac+v,b) % 7
    // return week[na]   
}