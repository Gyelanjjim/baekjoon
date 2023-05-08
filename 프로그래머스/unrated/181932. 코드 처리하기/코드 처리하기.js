function solution(code) {
    let ret = ""
    let mode = 0
    let cmd = {
        "0":(str, idx)=>{
            if(Number(str)) {
                mode = 1   
            }else if(idx%2 === 0){
                ret += str
            }
        },
        "1":(str, idx)=>{
            if(Number(str)) {
                mode = 0   
            }else if(idx%2 === 1){
                ret += str
            }
        }
    }
    for(let idx=0; idx<code.length; idx++){
        cmd[mode](code[idx], idx)
    }
    return ret || "EMPTY"
}