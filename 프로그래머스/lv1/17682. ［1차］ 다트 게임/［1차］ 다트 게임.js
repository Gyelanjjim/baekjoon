function solution(dartResult) {
    let arr = []
    let num = ''
    let cmd = {
        'S': (n)=>n,
        'D': (n)=>n**2,
        'T': (n)=>n**3
    }
    for(let i=0; i<dartResult.length; i++){
        const d = dartResult[i]
        if(/[0-9]/.test(d)){
            num += d
        }else if(/[SDT]/.test(d)){
            arr.push(cmd[d](+num))
            num = ''
        }else if(/[*]/.test(d)){
            if(arr.length === 1){
                arr[0] *= 2  
            }else if(arr.length === 2){
                arr[0] *= 2  
                arr[1] *= 2
            }else{
                arr[1] *= 2  
                arr[2] *= 2
            }
        }else if(/[#]/.test(d)){
            arr[arr.length-1] *= -1
        }
    }
    return arr.reduce((a,b)=>a+b,0)
}