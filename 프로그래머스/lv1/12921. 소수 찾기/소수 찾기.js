// function solution (n) {
//   let count = 0
//   for(let i=2; i<=n; i++){
//       if(i <= 3){
//           count++
//       }else{
//           const end = parseInt(Math.sqrt(i))
//           for(let j=2; j<=end; j++){
//               if(i % j === 0){
//                   break;
//               }
//           }
//           count++
//       }
//   }  
//   return count
// }
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}