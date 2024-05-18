var canPartition = function(nums) {
    let sum = nums.reduce((acc, v) => acc +v)
    if (sum & 1) return false;
    sum = Math.floor(sum / 2)
    let n = nums.length
    const memo = [...new Array(n)].map(a => [...new Array(sum)])

    const dp = (idx, s) => {
        if (s === 0) return true;
        if (idx >= n) return false;
        if (s < 0) return false;
        if (memo[idx][s] !== undefined) return memo[idx][s]

        let v = (s - nums[idx]) === 0 || dp(idx+1, s) || dp(idx+1, s - nums[idx])
        return memo[idx][s] = v
    }
    return dp(0, sum)
};