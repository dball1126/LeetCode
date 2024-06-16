/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefixSums = [], n = nums.length
    let sum = 1

    for (let i = 0; i < n; i++) {
        sum *= nums[i]
        prefixSums.push(sum)
    }
    sum = 1

    for (let i = n-1; i >= 0; i--) {
        let prev = 1;
        if (i-1 >= 0) prev = prefixSums[i-1]
        prefixSums[i] = prev * sum
        sum *= nums[i]
    }
    return prefixSums
};