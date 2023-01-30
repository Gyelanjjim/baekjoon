const d = n => {
    let arr = n.toString().split("").map(Number)
    return n + arr.reduce( (a,b) => a+b, 0 )
}
let arr = []
const max = 10000
for(let i = 0; i < max; i++){
    arr[ d(i) - 1 ] = d(i)  
}
for(let i = 0; i < max; i++){
    if( typeof arr[i] !== "number" ) console.log( i+1 )
}