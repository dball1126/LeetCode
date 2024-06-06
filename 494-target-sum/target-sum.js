/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    const n = nums.length
    const sum = nums.reduce((acc, v ) => acc + v, 0)
    if (sum < Math.abs(target)) return 0
    target = sum + target
    if (target & 1) return 0
    target = Math.floor(target / 2)

    const memo = [...new Array(n+ 1)].map(a => [...new Array( target+ 1)])

    const dp = (idx, t) => {
        if (idx < 0) return t === 0 ? 1 : 0
        if (memo[idx][t] !== undefined) return memo[idx][t]

        let v1 = dp(idx-1, t), v2 = dp(idx-1, t - nums[idx])
        return memo[idx][t] = v1 + v2
    }
    return dp(n-1, target)
};