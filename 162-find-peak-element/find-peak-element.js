/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0, r = nums.length-1

    while ( l <= r) {
        let mid = Math.floor((r + l) / 2)
        let left = -Infinity, right = -Infinity
        if (mid-1 >= 0) left = nums[mid-1]
        if (mid+1 < nums.length) right = nums[mid+1]
        if (l === r) {
            return l
        } else if (nums[mid] > right && nums[mid] > left) {
            return mid;
        } else if (nums[mid] <= right) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
};