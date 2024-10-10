/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let l = 0, r = nums.length-1

    while (l <= r) {

        let m = Math.floor((r + l) / 2)
        if (target === nums[m]) {
            return m
        } else if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return -1
};