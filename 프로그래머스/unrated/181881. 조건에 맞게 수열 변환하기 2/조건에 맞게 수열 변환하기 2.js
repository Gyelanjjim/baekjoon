function solution(arr) {
    let i = 0
    let [b, a] = [[], arr]
    while(true){
        b = a
        a = b.map(el => (el >= 50 && el % 2 === 0) ? el/2 : (el < 50 && el % 2 === 1) ? el*2+1 : el)
        if(b.filter((v,i) => v !== a[i]).length === 0) break;
        i++
    }
    
    return i
}