/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
// Time: O(n)
// Space: O(1)...not counting output array
var findMissingRanges = function(nums, lower, upper) {
    const result = [], n = nums.length;
    if (!nums.length) result.push([lower,upper])
    for (let i = 0; i < n; i++) {
        
        if ((lower === nums[i] && i !== n-1) || (i === n-1 && lower === upper)) {
            lower++;
            continue;
        } else if (i === n-1 && lower === nums[i] && lower !== upper) {
            result.push([lower+1, upper])
            continue;
        }

        result.push(([lower, nums[i] - 1]))
        lower = nums[i]+1

        if (i + 1 >= n && nums[i] !== upper) {
            result.push([lower, upper])
        }
    }
    return result;
};