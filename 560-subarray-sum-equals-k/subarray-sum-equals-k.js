/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0, total = 0;
    let prefixSums = new Map([[0,1]]);

    for (let n of nums) {
        sum += n;
        if (prefixSums.has(sum - k)) {
            total += prefixSums.get(sum - k);
        }
        if (!prefixSums.has(sum)) prefixSums.set(sum, 0);
        prefixSums.set(sum, prefixSums.get(sum) + 1);
    }
    return total;
};