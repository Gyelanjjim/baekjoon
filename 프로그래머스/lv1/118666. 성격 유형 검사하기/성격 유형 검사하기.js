function solution(survey, choices) {
    const score = {
        '1': {R:0, T:0},
        '2': {C:0, F:0},
        '3': {J:0, M:0},
        '4': {A:0, N:0}
    }
    const cmd = {
        'R': (n)=>n<4 ? score['1'].R += 4-n : n>4 ? score['1'].T += n-4 : 0, 
        'T': (n)=>n<4 ? score['1'].T += 4-n : n>4 ? score['1'].R += n-4 : 0,
        'C': (n)=>n<4 ? score['2'].C += 4-n : n>4 ? score['2'].F += n-4 : 0,
        'F': (n)=>n<4 ? score['2'].F += 4-n : n>4 ? score['2'].C += n-4 : 0,
        'J': (n)=>n<4 ? score['3'].J += 4-n : n>4 ? score['3'].M += n-4 : 0,
        'M': (n)=>n<4 ? score['3'].M += 4-n : n>4 ? score['3'].J += n-4 : 0,
        'A': (n)=>n<4 ? score['4'].A += 4-n : n>4 ? score['4'].N += n-4 : 0,
        'N': (n)=>n<4 ? score['4'].N += 4-n : n>4 ? score['4'].A += n-4 : 0 
    }
    
    for(let i=0; i<survey.length; i++){
        const su = survey[i][0]
        const ch = choices[i]
        cmd[su](ch)
    }
    let result = ''
    for(let i = 1; i<=4; i++){
        const sc = score[`${i}`]
        result += Object.entries(sc).sort((prev,cur)=>{
          if (prev[1] < cur[1]) return 1;
          if (prev[1] > cur[1]) return -1;
          if (prev[0] > cur[0]) return 1;
          if (prev[0] < cur[0]) return -1;
        })[0][0]
        
    }
  
    return result
}