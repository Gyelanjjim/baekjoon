function solution(str_list) {
    const l = str_list.indexOf('l')
    const r = str_list.indexOf('r')

    if(r === -1 && l === -1) {
        return []
    }else if(r !== -1 && l !== -1){
        return l < r ? str_list.slice(0,l) : str_list.slice(r+1)
    }else if(r !== -1){
        return str_list.slice(r+1)
    }else{
        return str_list.slice(0,l)
    }
    
}

