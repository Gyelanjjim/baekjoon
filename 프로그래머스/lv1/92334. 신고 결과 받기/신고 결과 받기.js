function solution(id_list, report, k){
  report = [...new Set(report)]  
  let a = {};
  let b = {}
  id_list.forEach(v => a[v] = [])
  report.forEach((el,i) => {
    const [rt, rted] = el.split(' ')
    a[rt].push(rted)
    b[rted] = (b[rted] || 0) + 1
  })
  
  return  Object.values(a)
                .map(el => el.map(v => b[v]/k >= 1 ? 1 : 0 )
                .reduce((i,j)=>i+j,0))    
}