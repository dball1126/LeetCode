/**
 * @param {number[]} nums
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time: O(n^2)
// Space: O(n)
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0
    let max = 1, n = nums.length
    const memo = [...new Array(n+1)]
    
    const dp = (i) => {
        if (i >= n) return memo[i] = 0;
        if (i === n-1) return memo[i] = 1;
        if (memo[i] !== undefined) return memo[i]
        let v = 0
        dp(i+1)
        for (let j = i+1; j < n; j++) {
            if (nums[i] < nums[j]) {
                v = Math.max(v, dp(j))
            }
        }
        max = Math.max(max, v+1)
        return memo[i] = v + 1
    }
    dp(0)
    return max
};