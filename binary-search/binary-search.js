/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * Binary Search. Recursion.
 * Time Complexity: log(N)
 * Space complexity: log(N) because of recursion the call stack
 */


var search = function(nums, target) {
    if (!nums.length) return -1;
    
    const find = (s, e) => {
        if (s > e) return -1;

        let mid = Math.floor((e -s) / 2) + s;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >  target) {
            return find(s, mid -1)
        } else {
            return find(mid+1, e)
        }
    }

    return find(0, nums.length-1)
};