function solution(name, yearning, photo) {
    const result = name.reduce((a, c, i) => { 
        return { ...a, [c]: yearning[i] }
    }, new Object);
    
    return photo.map(v=>v.map(e=>result[e] || 0).reduce((a,c)=>a+c,0))
}