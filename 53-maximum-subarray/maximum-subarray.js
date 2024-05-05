/**
 * @param {number[]} nums
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n), Space: O(1)
var maxSubArray = function(nums) {
    let max = nums[0] || 0, len = nums.length
    for (let i = 1; i < len; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        max = Math.max(max, nums[i])
    }
    return max
};