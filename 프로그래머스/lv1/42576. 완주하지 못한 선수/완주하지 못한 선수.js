function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
//     const p = new Set(participant).size
//     const c = new Set(completion).size
    
//     // 중복 이름이 없을 때
//     if(p > c){
//         for(let i = 0; i < participant.length; i++) {
//             const idx = completion.indexOf(participant[i])
//             if(idx === -1) return participant[i]
//         }
//     }else{
//         for(let i = 0; i < completion.length; i++) {
//             const idx = participant.indexOf(completion[i])
//             if(idx !== -1) participant.splice(idx, 1)
//         }
//         return participant[0]
//     }
}