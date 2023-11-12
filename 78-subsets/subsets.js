/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time: O(2^n * n)
// Space: O(n)
var subsets = function(nums) {
    const result = [], n = nums.length

    const backtrack = (curr, idx) => {
        result.push([...curr])
        if (idx >= n) return;
        for (let i = idx; i < n; i++) {
            curr.push(nums[i])
            backtrack(curr, i+1)
            curr.pop()
        }
    }
    backtrack([], 0)
    return result;
};