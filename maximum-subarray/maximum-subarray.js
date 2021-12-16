/**
 * nums(n) = Math.max(nums[i], nums[i] + maxSubArray(i+1))
 * Time O(n) we hit every index once
 * Space O(n) we can reuse the nums array
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    const dp = (i) => {
        if (i >= nums.length) return 0;
        nums[i] = Math.max(nums[i], nums[i] + dp(i+1))
        max = Math.max(max, nums[i])
        return nums[i]
    }
    dp(0)
    return max
};