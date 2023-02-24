function solution(babbling) {
  const one = ["aya", "ye", "woo", "ma"]
  let count = 0;
  for(let i = 0; i<babbling.length; i++){
    for(let j = 0; j<one.length; j++){
      babbling[i] = babbling[i].replace(one[j], "-")
    }
  }
  for(let k = 0; k<babbling.length; k++){
    if(babbling[k].split("-").join("") === "") count++; 
  }
  return count;
}