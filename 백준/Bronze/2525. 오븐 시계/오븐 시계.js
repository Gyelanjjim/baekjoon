const fs = require("fs")
let [hhmm, time] = fs.readFileSync(0).toString().trim().split("\n")
let [h, m] = hhmm.split(" ").map(Number)
time = Number(time)
if( m + time >= 60 ) {
    h += parseInt( (m + time) / 60 )
    m = (m + time) % 60
    if(h >= 24) h -= 24
}else {
    m += time    
}
console.log(h, m)