function solution(number) {
    return number.split('').reduce((a,b)=>a+(+b), 0) % 9
}