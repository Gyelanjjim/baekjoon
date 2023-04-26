function solution(date1, date2) {
    const d1 = new Date(date1.join('-')).getTime()
    const d2 = new Date(date2.join('-')).getTime()
    return d1 < d2 ? 1 : 0
}