function solution(strArr) {
    let obj = []
    strArr.forEach((v,i)=>{
        if(obj[v.length] === undefined){
            obj[v.length] = [v]
        }else{
            obj[v.length].push(v)
        } 
    })
    return obj.sort((a,b)=>b.length-a.length)[0].length
}