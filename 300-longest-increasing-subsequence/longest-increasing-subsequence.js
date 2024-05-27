// Bottom-Up Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0
    let max = 1, n = nums.length
    const dp = [...new Array(n+1)].fill(0)
    
    for (let i = n-1; i >= 0; i--) {
        let v = 0;
        for (let j = n-1; j >= i+1; j--) {
            if (nums[i] < nums[j]) {
                v = Math.max(v, dp[j])
            }
        }
        dp[i] = v + 1
        max = Math.max(max, dp[i])
    }
    
    return max
};