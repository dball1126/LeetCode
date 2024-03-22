/**
 * @param {number[]} nums
 * @return {number}
 */
// Prefix Sums
// Time and Space: O(n)
var findMaxLength = function(nums) {
    let maxLength = 0, n = nums.length;
    let prefixSums = new Map()
    let sum = 0
    for (let i = 0; i < n; i++) {
        const v = nums[i]
        v === 1 ? sum++ : sum--
        if (sum  === 0) {
            maxLength = Math.max(maxLength, i+1)
        } else if (prefixSums.has(sum)) {
            let idx = prefixSums.get(sum)
            maxLength = Math.max(maxLength, i - idx)
        }

        if (!prefixSums.has(sum)) prefixSums.set(sum, i)
    }
    return maxLength;
};