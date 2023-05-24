function solution(players, callings) {
    // const p = players.reduce((v,c,i)=>{return {...v,[c]:i}}, {})
    const p = {}
    players.forEach((v,i)=>p[v]=i)
    for(let v of callings){
        let idx = p[v]              // 호명된 플레이어의 현재 위치
        let name1 = players[idx]    // 호명된 플레이어 이름
        let name2 = players[idx-1]  // 호명된 플레이어의 앞사람 이름
        p[v]-=1                     // 호명된 플레이어의 다음 위치(전진)
        p[name2]+=1                 // 호명된 플레이어 앞사람의 다음 위치(후진)
        players[idx] = name2        // 플레이어 순서 변동
        players[idx-1] = name1      // 플레이어 순서 변동
    }

    return players;
}
