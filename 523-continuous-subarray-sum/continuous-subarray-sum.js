/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let prefixSums = new Map(), prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let multiple = prefixSum % k;
        if (multiple === 0 && i >= 1) return true;
        if (prefixSums.has(multiple)) {
            
            if (i - (prefixSums.get(multiple)+1) >= 1)  return true
        }
        if (!prefixSums.has(multiple)) prefixSums.set(multiple, i);
    }
    return false;
};