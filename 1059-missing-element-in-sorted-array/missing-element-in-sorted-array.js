/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Greedy
// Keep subtracting missing nums from k
// Time: O(n), Space: O(1)
var missingElement = function(nums, k) {
    let prev = nums[0], n = nums.length

    for (let i = 1; i < n; i++) {
        let curr = nums[i]
        let diff = (curr - prev) - 1

        if (diff >= k) {
            return prev + k
        } else {
            k -= diff
            prev = curr;
        }
    }
    return prev+k
};