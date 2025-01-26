/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let lo = 0, hi = 0, maxAvgSum = -Infinity, sum = 0;
    while (hi < nums.length) {
        sum += nums[hi];
        while (hi - lo + 1 > k) {
            sum -= nums[lo];
            lo++;
        }
        if (hi - lo +1 === k) {
            maxAvgSum = Math.max(maxAvgSum, (sum / k));
        }
        hi++;
    }
    return maxAvgSum
};