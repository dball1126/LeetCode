/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top-down Dynamic Programming
// Time: O(n * m)...n for nums and m for target
// Space: O(m)
var combinationSum4 = function(nums, target) {
    const memo = [...new Array(target+1)]

    const dp = (t) => {
        if (t === 0) return 1;
        if (memo[t] !== undefined) return memo[t]
        memo[t] = 0
        for (let num of nums) {
            if (t - num >= 0 && t - num < t) {
                memo[t] += dp(t - num)
            }
        }
        return memo[t]
    }
    const result =  dp(target)
    return result
};
console.log(combinationSum4([1,2,3],4))
