const solution = (input) => {
    const data = ['A', 'E', 'I', 'O', 'U'];
    function func(data, r) {
        const result=[];
        if(r===1) return data;
        for (let i = 0; i < data.length; i++) {
            const main = data[i];
            const sub = data;
            let permuteR = func(sub,r-1);
            result.push(...permuteR.map((v)=>[main,...v]));
        }
        return result.map(v=>v.join(''));
    }
    let result = [];
    for(let i=1; i<=data.length; i++){
        result = [...func(data,i), ...result];
    }
    result.sort()    
    
    return result.indexOf(input)+1
}