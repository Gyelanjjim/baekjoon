function solution(numbers, n) {
    let sum = 0;
    for(let el of numbers){
        sum += el
        if(sum > n) return sum
    }
    
}