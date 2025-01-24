/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let max = 0, s = 0, e = 0, len = nums.length, zeros = 0;
    while (e < len) {
        if (nums[e] === 0) zeros++;
        while (zeros > k && s+1 <= e+1) {
            if (nums[s] === 0) zeros--;
            s++;
        }
        max = Math.max(max, e-s+1);
        e++;
    }
    return max;
};