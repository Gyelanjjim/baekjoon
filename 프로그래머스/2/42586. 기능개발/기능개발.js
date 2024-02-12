const solution = (progresses, speeds) => {    
    const remain = progresses.map((v,i)=>Math.ceil((100-v)/speeds[i]));
    let start = remain[0];
    let count = 1;
    const result = []
    for (let i=1; i<remain.length; i++) {
        if (start >= remain[i]) {
            count++;
        } else {
            result.push(count);
            count = 1;
            start = remain[i];
        }
        if (i === remain.length -1) result.push(count);
    }
    return result;
}