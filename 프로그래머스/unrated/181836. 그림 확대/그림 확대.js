function solution(picture, k) {
    const arr = [] 
    picture = picture.map(v=>v.split('').map(e=>e.repeat(k)).join(''))
    picture.forEach(m => {
     for(let i=0; i<k; i++){
       arr.push(m);
     }
    })
    return arr
}