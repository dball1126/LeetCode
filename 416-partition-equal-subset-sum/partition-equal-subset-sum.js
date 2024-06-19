/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc + v)
    if (sum % 2 === 1) return false;
    let half = Math.floor(sum / 2), n = nums.length;

    const memo = [...new Array(half+1)].map(a => [...new Array(n+1)])

    const dp = (i, a) => {
        if (a === 0) return true;
        if (a < 0 || i >= n) return false;
        if (memo[a][i] !== undefined) return memo[a][i]
        let val1 = dp(i+1, a), val2 = dp(i+1, a - nums[i])
        return memo[a][i] = val1 || val2
    }
    return dp(0, half)
};