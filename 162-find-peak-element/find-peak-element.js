/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0, high = nums.length-1
    while (low < high) {
        let m = Math.floor((high + low) / 2) + 1
        let prev = nums[m-1] || -Infinity, nx =nums[m+1] || -Infinity
        
        if (nums[m] > prev && nums[m] > nx) {
            return m
        } else if (prev > nums[m]) {
            high = m - 1
        } else {
            low = m
        }
    }
    return low
};