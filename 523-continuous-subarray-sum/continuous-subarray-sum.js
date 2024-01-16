/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Prefix Sum / Dynamic Programming
// Time and Space: O(n)
var checkSubarraySum = function(nums, k) {
    let prefixSumsDP = new Map(), sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (i > 0) {
            if (sum % k === 0) return true
            if (prefixSumsDP.has(sum % k) && (i - prefixSumsDP.get(sum % k)) >= 2) return true;
        }
        if (!prefixSumsDP.has(sum % k)) {
            prefixSumsDP.set(sum % k, i);            
        }
    }
    return false;
};