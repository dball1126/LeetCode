/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n * m)...n for nums and m for target
var findTargetSumWays = function(nums, target) {
    let n = nums.length
    let memo = new Map()

    const dp = (idx, t) => {
        if (idx === n && t === 0) return 1;
        if (idx >= n) return 0;
        let k = idx + ":" + t
        if (memo.has(k)) return memo.get(k)

        let v = dp(idx+1, t + nums[idx]) + dp(idx+1, t - nums[idx])
        memo.set(k, v)
        return v
    }

    return dp(0, target)
};