/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prevSum = nums[0],max = prevSum
    for (let i = 1; i < nums.length; i++) {
        prevSum = Math.max(nums[i], nums[i] + prevSum)
        max = Math.max(max, prevSum)
    }
    return max;
};