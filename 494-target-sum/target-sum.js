/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Converted to 0/1 Knapsack (Bounded) DP Problem
// Time and Space: O(n * m)...n for length of nums and m for half the total sum
var findTargetSumWays = function(nums, target) {
    let n = nums.length
    let sum = nums.reduce((acc, v) => acc + v, 0)
    if (sum < Math.abs(target)) return 0
    target += sum
    if (target & 1) return 0
    target = Math.floor(target / 2)

    const dp = [...new Array(n+1)].map(a => [...new Array( target + 1)].fill(0))
    let row = dp.length, column = dp[0].length
    for (let arr of dp) arr[0] = 1;

    for (let r = 1; r < row; r++) { 
        for (let c = 0; c < column; c++) {

            dp[r][c] = dp[r-1][c]

            if (c - nums[r - 1] >= 0) {
                dp[r][c] += dp[r-1][c - nums[r-1]]
            }
        }
    }
    return dp[row-1][column-1]
}