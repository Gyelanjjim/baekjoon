function solution(n, arr1, arr2) {
  const a = arr1.map(el => ('0'.repeat(n-1) + el.toString(2)).slice(-n))
  const b = arr2.map(el => ('0'.repeat(n-1) + el.toString(2)).slice(-n))
  const arr = []
  
  for(let i = 0; i<n; i++){
    let str = ''
    for(let j = 0; j<n; j++){
      parseInt(a[i][j]) + parseInt(b[i][j]) === 0 ? str += ' ' : str += '#' 
    }
    arr.push(str)
  }
  return arr
}