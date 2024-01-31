/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// Backtracking
// Time: O((2^n) * n)...being explicit here by pointing out that we're copying the array
// Space: O(2^n)
var combinationSum = function(nums, tgt) {
    let result = [], n = nums.length

    const backtrack = (curr, sum, idx) => {
        if (sum === tgt) {
            return result.push([...curr])
        }

        if (idx >= n) return;

        for (let i = idx; i < n; i++) {
            
            if ((sum + nums[i] )<= tgt) {
                curr.push(nums[i])
                backtrack(curr, sum + nums[i], i)
                curr.pop();
            }
        }
    }
    backtrack([], 0, 0)
    return result;
};