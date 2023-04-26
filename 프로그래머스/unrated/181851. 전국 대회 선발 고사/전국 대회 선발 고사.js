function solution(rank, attendance) {
    let arr = []
    attendance.forEach((v,i) => {
        if(v) arr.push([rank[i],i])
    })
    const [a,b,c] = arr.sort((a,b)=>a[0]-b[0]).slice(0,3)
    return 10000*a[1] + 100*b[1] + c[1];
}