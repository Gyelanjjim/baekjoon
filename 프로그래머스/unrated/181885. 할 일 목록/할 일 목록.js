function solution(todo_list, finished) {
    let arr = []
    finished.forEach((el,i)=>{
        if(!el) arr.push(todo_list[i]) 
    })
    return arr
}