function solution(num_str) {
    return num_str.split('').reduce((a,b)=> a + Number(b), 0)
}