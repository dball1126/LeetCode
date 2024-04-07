/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    let dp = [...new Array(n+1)].map(a => [...new Array(2)].fill(0))
    // console.log(dp)
    dp[0][1] = nums[0]

    for (let i = 1; i < n; i++) {
        dp[i][1] = Math.max(dp[i-1][0] + nums[i], dp[i-1][1]);
        dp[i][0] = dp[i-1][1];
     }
    //  console.log(dp)
     return dp[n-1][1]
}