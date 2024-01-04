/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Sliding Window + Stack
// Time: O(n)...since elements can be at most checked twice.
// Space: O(k)...for the stack length
var maxSlidingWindow = function(nums, k) {
    let result = [], stack = [], s = 0, n = nums.length
    let e = 0

    while (e < n) {

        while (stack.length && nums[stack[stack.length-1]] <= nums[e]) {
            stack.pop();
        }
        stack.push(e)

        if ((e - s) + 1 === k) {
            result.push(nums[stack[0]])
            if (stack[0] === s) {
                stack.shift()
            }
            s++
        }
        e++
    }
    return result
};