/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time: O(n * m)...n for coins and m for amount
// Space: O(m)
var coinChange = function(coins, amount) {
    const memo = [...new Array(amount+1)].fill(Infinity)
    memo[0] = 0
    for (let i = 1; i <= amount; i++) {

        for (let c of coins) {
            if (i - c === 0) {
                memo[i] = 1
            } else if (i - c >= 0 && i - c < i) {
                memo[i] = Math.min(memo[i], (memo[i-c]  + 1))
            }
        }
    }
    return memo[amount] === Infinity ? -1 : memo[amount]
};