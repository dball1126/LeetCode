/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Sliding Window & STACK
// Time: O(n)
// Space: O(1)
var maxSlidingWindow = function(nums, k) {
    let result = [], s = 0, e = 0, n = nums.length, stack = []
    while (e < n) { // slide right pointer right

        while(e < n && (e-s) < k) {
            while (stack.length && nums[stack[stack.length-1]] < nums[e]) {
                stack.pop();
            }
            stack.push(e)
            e++
        }
        result.push(nums[stack[0]])

        while (stack.length && stack[0] <= s) {
            stack.shift()
        }
        s++
    }
    return result
};