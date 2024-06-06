/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    const n = nums.length;
    const sum = nums.reduce((acc, v ) => acc + v, 0);
    if (sum < Math.abs(target)) return 0;
    target = sum + target;
    if (target & 1) return 0;
    target = Math.floor(target / 2);

    const dp = [...new Array(n+ 1)].map(a => [...new Array( target+ 1)].fill(0))

    for (let arr of dp) arr[0] = 1

    for (let r = 1; r <= n; r++) {
        for (let c = 0; c <= target; c++) {

            if (c - nums[r-1] >= 0) {
                dp[r][c] = dp[r-1][c - nums[r-1]] +  dp[r-1][c]
            } else {
                dp[r][c] =  dp[r-1][c]
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1]
};