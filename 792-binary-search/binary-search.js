/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Binary Search
// Time: O(log(n))
// Space: O(1)
var search = function(nums, target) {
    let low = 0, high = nums.length -1
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1;
        if (nums[m] === target) {
            return m
        } else if (target < nums[m]) {
            high = m - 1;
        } else {
            low = m;
        }
    }
    return nums[low] === target ? low : -1
};