/**
 * @param {number[]} nums
 * @return {number}
 */
// Dynamic Programming
// Time and Space: O(n)
var rob = function(nums) { // Top Down
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    const n = nums.length;
    let memo = [...new Array(n)]
    memo[0] = nums[0]; 
    memo[1] = nums[1]
    const dp = (idx) => {
        if (idx < 0 || idx >= n) return 0
        if (memo[idx] !== undefined) return memo[idx]
        memo[idx] = Math.max(dp(idx - 1 ), nums[idx] + dp(idx-2))
        memo[idx-1] = Math.max(memo[idx-1], memo[idx-2])
        dp(idx+1)
        return memo[idx]
    }
    dp(2)
    return memo[n-1]
};