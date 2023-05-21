function solution(nums) {
    const set = new Set(nums)
    return Math.min(set.size, nums.length/2)
}