/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let lo = 0, hi = nums.length-1;

    while (lo < hi) {

        let m = Math.floor((hi + lo) / 2) + 1;
        if (nums[m] === target) {
            return m;
        } else if (nums[m] <= nums[hi]) { // truth
            if (target >= nums[m] && target <= nums[hi]) {
                lo = m;
            } else {
                hi = m -1;
            }
        } else {
            if (nums[lo] <= nums[m] && target >= nums[lo] && target <= nums[m]) {
                hi = m -1;
            } else {
                lo = m;
            }
        }

    }
    return nums[lo] === target ? lo : -1;
};