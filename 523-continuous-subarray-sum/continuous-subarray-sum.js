/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Prefix Sums
// Time and Space: O(n)
var checkSubarraySum = function(nums, k) {
    const prefixSums = new Map()
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (!prefixSums.has(sum % k)) prefixSums.set(sum % k, i)
    }
    sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if ((sum % k) === 0 && i >= 1) {
            return true;
        } else if (prefixSums.has(sum % k)) {
            let idx = prefixSums.get(sum % k) 
            if (i - idx >= 2) {
                return true;
            }
        }
    }
    return false
};