// Bottom-Up Dynamic Programming
// Time and Space: O(n^2)
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    const n = nums.length
    const dp = [...new Array(n+1)].map(a => [...new Array(n+1)].fill(1))
    let max = 1;

    for (let i = n-2; i >= 0; i--) {
        for (let j = n-1; j > i; j--) {
            let val1 = 0, val2 = 0
            if (nums[i] < nums[j]) {
                val1 = 1 + dp[j][j+1]
            }
            val2 = dp[i][j+1]
            dp[i][j] = Math.max(val1, val2)
            max = Math.max(max, dp[i][j])
        }
    }
    return max
}