function solution(n, control) {
    const cmd = {
        'w': (x) => x+1,
        's': (x) => x-1,
        'd': (x) => x+10,
        'a': (x) => x-10
    }
    control.split('').forEach(el => {
        n = cmd[el](n)
    })
    return n
}