function solution(arr1, arr2) {
    const [n1,n2]=[arr1.length, arr2.length]
    if(n1>n2){
        return 1
    }else if(n1<n2){
        return -1
    }else{
        const s1 = arr1.reduce((a,b)=>a+b,0)
        const s2 = arr2.reduce((a,b)=>a+b,0)
        if(s1>s2){
            return 1
        }else if(s1<s2){
            return -1
        }else{
            return 0
        }
    }
}