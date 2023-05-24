function solution(numbers, hand) {
    let [l,r] = ['*', '#']
    let result = ''
    
    let length = {
        "2": {'1': 1,'2': 0,'3': 1,'4': 2,'5': 1,'6': 2,
              '7': 3,'8': 2,'9': 3,'0': 3,'*': 4,'#': 4},
        "5": {'1': 2,'2': 1,'3': 2,'4': 1,'5': 0, '6': 1,
              '7': 2,'8': 1,'9': 2,'0': 2,'*': 3,'#': 3},
        "8": {'1': 3,'2': 2,'3': 3,'4': 2,'5': 1,'6': 2,
              '7': 1,'8': 0,'9': 1,'0': 1,'*': 2,'#': 2},
        "0": {'1': 4,'2': 3,'3': 4,'4': 3,'5': 2,'6': 3,
              '7': 2,'8': 1,'9': 2,'0': 0,'*': 1,'#': 1}
    }
    
    for(let i=0; i<numbers.length; i++){
        const v = numbers[i]
        if(v === 1 || v === 4 || v === 7) {
            result += 'L'
            l = v
        }else if(v === 3 || v === 6 || v === 9) {
            result += 'R'
            r = v
        }else{
            const a = length[v]
            if(a[l] === a[r]){
                hand = hand[0].toUpperCase()
                result += hand
                hand === 'R' ? r = v : l = v
            }else if(a[l] > a[r]){
                result += 'R'
                r = v
            }else{
                result += 'L'
                l = v
            }            
        }
    }
    return result
}
// function solution(numbers, hand) {
//   hand = hand[0] === "r" ? "R" : "L"
//   let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
//   let h = { L: [1, 1], R: [1, 1] }
//   return numbers.map(x => {
//     if (/[147]/.test(x)) {
//       h.L = [position[x], 1]
//       return "L"
//     }
//     if (/[369]/.test(x)) {
//       h.R = [position[x], 1]
//       return "R"
//     }
//     let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
//     let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
//     if (distL === distR) {
//       h[hand] = [position[x], 0]
//       return hand
//     }
//     if (distL < distR) {
//       h.L = [position[x], 0]
//       return "L"
//     }
//     h.R = [position[x], 0]
//     return "R"
//   }).join("")
// }
