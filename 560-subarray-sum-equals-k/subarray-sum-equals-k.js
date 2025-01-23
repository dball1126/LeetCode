/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0, prefixSums = new Map([[0,1]]), count = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (prefixSums.has(sum - k)) {
            let val = prefixSums.get(sum - k);
            if (val === 0) val = 1
            count += val
        }
        if (!prefixSums.has(sum)) prefixSums.set(sum, 0);
        prefixSums.set(sum, prefixSums.get(sum) + 1);
    }
    return count;
};