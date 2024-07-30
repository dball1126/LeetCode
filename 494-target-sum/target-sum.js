/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let n = nums.length
    const memo = new Map()
    const dp = (i, s) => {
        if (i >= n) {
            return s === target ? 1 : 0
        }
        let k = i + ":" + s
        if (memo.has(k)) return memo.get(k)

        let val = dp(i+1, s + nums[i]) + dp(i+1, s - nums[i])
        memo.set(k, val)
        return val
    }
    return dp(0,0)
};