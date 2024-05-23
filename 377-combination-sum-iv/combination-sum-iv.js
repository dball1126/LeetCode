/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for nums and m for target
// Space: O(m)
var combinationSum4 = function(nums, target) {
    const memo = [...new Array(target+1)].fill(0)
    memo[0] = 1

    for (let t = 1; t <= target; t++) {
        for (let c of nums) {
            if (t -c >= 0) {
                memo[t] += memo[t - c]
            }
        }
    }
    return memo[target]
};