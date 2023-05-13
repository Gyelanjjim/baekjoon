function solution(a, b, c, d) {
    const arr = [a,b,c,d].sort()
    const num = [...new Set(arr)]
    // 조건 1. 모두 같을 경우
    if(num.length === 1){
        return 1111 * num[0]
    // 조건 2. 모두 다를 경우
    }else if(num.length === 4){
        return num[0]
    // 조건 3. 2개 같고 2개 다를 경우
    }else if(num.length === 3){
        for(let i=0; i<4;i++){
            if(arr[i] === arr[i+1]){
              arr.splice(i,2)
              return arr.reduce((a,b) => a*b, 1)
            }
        }
    // 조건 4. 2개 2개 같을 경우
    }else if(arr[1] !== arr[2]){
        return (arr[1]+arr[2])*(arr[2]-arr[1])
    // 조건 5. 3개 같을 경우
    }else if(arr[0] === arr[1]){
        return (10*arr[0]+arr[3])**2
    }else{
        return (10*arr[3]+arr[0])**2
    }
}