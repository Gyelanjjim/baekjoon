const solution = (want, number, discount) => {
  let count = 0;
  for(let j=0; j<discount.length-9; j++){
    const dict = {};
    want.forEach((v,i)=> dict[v] = number[i]);
    for(let i=j; i<j+10; i++){
      const product = discount[i];
      if(dict[product]>0){
        dict[product] -= 1;
      }else{
        break;
      }
      if(i === j+9) count++
    }
  }
    
  return count
}