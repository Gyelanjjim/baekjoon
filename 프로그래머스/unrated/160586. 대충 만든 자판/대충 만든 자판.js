function solution(keymap, targets) {
    let set = new Set()
    keymap.forEach(v=>v.split('').forEach(e=>set.add(e)))
    const elements = [...set]
    const obj = elements.reduce((a,c)=>{
      a[c] = -1; 
      return a;
    }, {})
    
    for(let i=0; i<elements.length; i++){
        const alp = elements[i]
        for(let j=0; j<keymap.length; j++){
            const key = keymap[j]
            const id = key.indexOf(alp)
          
            if(id !== -1) obj[alp] = obj[alp] === -1 ? id : obj[alp] = Math.min(id, obj[alp])
        }
    }
    const result = []
    for(let v of targets){
        let sum = 0
        for(let j = 0; j<v.length; j++){
            const m = v[j]
            if(typeof obj[m] === 'number'){
              sum += obj[m] + 1
            }else{
              sum = -1
              break
            }  
        }
        result.push(sum)
    } 
    return result 
}