/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Sliding Window + Monotonic Deque
// Time: O(n)...since elements can be at most checked twice.
// Space: O(k)...for the stack length
var maxSlidingWindow = function(nums, k) {
    let result = [], qeueue = [], s = 0, n = nums.length
    let e = 0

    while (e < n) {

        while (qeueue.length && nums[qeueue[qeueue.length-1]] <= nums[e]) {
            qeueue.pop();
        }
        qeueue.push(e)

        if ((e - s) + 1 === k) {
            result.push(nums[qeueue[0]])
            if (qeueue[0] === s) {
                qeueue.shift()
            }
            s++
        }
        e++
    }
    return result
};