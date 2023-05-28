// function solution(s) {
//     return s.toLowerCase().split(' ')
//             .map(el => el.charAt(0).toUpperCase() + el.slice(1))
//             .join(' ')
// }
function solution(s) {
    const words = s.split("")
    let nextUpper = true;
    const converted = words.map(c => {
        if (c == " ") { nextUpper = true; return c }
        else if (nextUpper) { nextUpper = false; return c.toUpperCase(); }
        else { return c.toLowerCase(); }
    })
    return converted.join("")
}