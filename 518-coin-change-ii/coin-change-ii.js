/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// Unbounded Knapsack
// Bottom-Up Dynamic Programming
// Time and Space: O(n * m)...n for coins...m for amount
// Space: O(m)
var change = function(amount, coins) {
    let dp = [...new Array(amount+1)].fill(0)
    dp[0] = 1
    for (let c of coins) {
        for (let a = 1; a <= amount; a++) {
            if (a - c >= 0) {
                dp[a] += dp[a-c]
            }   
        }
    }
    return dp[amount]
};