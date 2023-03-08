function solution(A,B){
    let sum = 0
    A = A.sort((a,b) => a-b)
    B = B.sort((a,b) => b-a)
    A.forEach((el,i) => sum += el * B[i] )
    return sum
}