/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let n = nums.length
    const memo = new Map()
    const dp = (i, tgt) => {
        if (i >= n) return tgt === target ? 1 : 0
        let k = i + ":" + tgt
        if (memo.has(k)) return memo.get(k)

        let way1 = dp(i+1, tgt - nums[i]), way2 = dp(i+1, tgt + nums[i])

        memo.set(k, way1 + way2)
        return way1 + way2
    }
    return dp(0, 0)
};