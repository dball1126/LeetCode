/** Binary Search
 * Time: O(log(n))
 * Space: O(1)
 */
var search = function(nums, target) {
    let s = 0, e = nums.length-1;
    
    while (s <= e) {
        let m = Math.floor((e + s) / 2)
        if (nums[m] === target) return m;

        if (nums[m] >= nums[s]) {
            if (target < nums[m] && target >= nums[s]) {
                e = m - 1
            } else {
                s = m + 1
            }
        } else {
            if (target > nums[m] && target <= nums[e]) {
                s = m + 1
            } else {
                e = m  - 1
            }
        }
    }
    return -1
};