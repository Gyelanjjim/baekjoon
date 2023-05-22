function solution(nums) {
    nums.sort((a,b)=>a-b)
    let arr = []
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                arr.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    // console.log(set)
    const max = arr[arr.length-1]
    // console.log("max:", max)
    for(let l=2; l<=max; l++){
        for(let m=l*2; m<=max; m+=l){	
            arr = arr.filter(v=> v !== m)				 
        }
    }
    // console.log(set)
    return arr.length
}