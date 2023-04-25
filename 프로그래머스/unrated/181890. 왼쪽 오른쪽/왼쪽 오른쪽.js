function solution(str_list) {
    let l = -1;
    let r = -1;

    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === 'l') {
            l = i;
            break;
        } else if (str_list[i] === 'r') {
            r = i;
            break;
        }
    }

    return l !== -1 ? str_list.slice(0, l) : 
                r !== -1 ? str_list.slice(r + 1) : []
}


