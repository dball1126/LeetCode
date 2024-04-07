/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) { // Bottom-Up
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    const n = nums.length;
    let memo = [...new Array(n)]
    memo[0] = nums[0]; 
    memo[1] = nums[1]
    for (let i = 2; i < n; i++) {
        memo[i] = Math.max(nums[i] + memo[i-2], memo[i-1])
        memo[i-1] = Math.max(memo[i-1], memo[i-2])
    }
    return memo[n-1]
}