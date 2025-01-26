/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0], prevSum = 0;
    for (let n of nums) {
        prevSum = Math.max(prevSum + n, n);
        maxSum = Math.max(prevSum, maxSum);
    }
    return maxSum;
};