/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0], maxSum = nums[0], i = 1
    while (i < nums.length) {
        if (nums[i-1] >= nums[i]) {
            maxSum = Math.max(maxSum, nums[i], sum)
            sum = nums[i]
        } else {
            sum += nums[i]
        }
        i++
    }
    return Math.max(sum, maxSum)
};