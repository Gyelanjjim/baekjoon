// function solution(array=[10, 110,115, 120], n=115) {
//     let sub = array.sort((a,b)=>a-b).map(el=>Math.abs(el-n)*100)
//     let obj = {}
//     for(let i in sub){
//         obj[Number(sub[i]+i)] = 0
//     }
//     const i = Object.keys(obj)[0]%100
//     return array[i]
// }
function solution(array, n) {
    let absArr = array.sort((a,b)=>a-b).map(i=>Math.abs(i-n)) 
    let minNum = Math.min.apply(null, absArr)
    let idx =  absArr.indexOf(minNum) 

    return array[idx]
}