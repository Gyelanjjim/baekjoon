function solution(answers) {
    const su = {
        "1": { rule: [1, 2, 3, 4, 5], count: 0 },
        "2": { rule: [2, 1, 2, 3, 2, 4, 2, 5], count: 0 },
        "3": { rule: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], count: 0 }
    }
    for(let i=0; i<answers.length; i++){
        const a = answers[i]
        if(a === su["1"].rule[i%5]) su["1"].count++
        if(a === su["2"].rule[i%8]) su["2"].count++
        if(a === su["3"].rule[i%10]) su["3"].count++   
    }
    const max = Math.max(su["1"].count, su["2"].count, su["3"].count)
    let result = []
    for(let i=1; i<=3; i++){
        if(max === su[`${i}`].count) result.push(i)
    }
    return result.sort()
}