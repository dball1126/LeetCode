/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time: O(n * m)
// Space: O(m)
var combinationSum4 = function(nums, target) {
    let memo = [...new Array(target+1)]

    const dp = (a) => {
        if (a === 0) return 1;
        if (memo[a] !== undefined) return memo[a]
        memo[a] = 0
        for (let v of nums) {
            if ((a - v) >= 0 && (a - v) < a) {
                memo[a] += dp(a - v)
            }
        }
        return memo[a]
    }
    return dp(target)
};