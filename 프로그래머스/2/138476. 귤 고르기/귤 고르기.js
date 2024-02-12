const solution = (k, tangerine) => {
    let o = {}
    tangerine.forEach(v=>o[v] = (o[v] || 0)+1)
    const val = Object.values(o).sort((a,b)=>b-a)
    // 각 종류별 개수 val[]를 내림차순으로 정렬하고
    let sum = 0;
    let count = 0;
    for(let i = 0; i<val.length; i++){
        sum += val[i];
        // 각 종류별 개수를 더해서 총 개수 sum을 구할 때마다 
        count++;
        // 종류의 수 count를 카운팅하고
        if(sum >= k) break;
        // 총 개수 sum이 k 이상이면 순회를 종료
    }
    return count
    // 최종 종류의 수 count를 반환
}