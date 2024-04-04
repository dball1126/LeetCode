/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Dynamic Programming
// Time: O(n * m)...n for coins and a for amount
// Space: O(m)
var coinChange = function(coins, amount) { // Top-Down 
    const n = coins.length;
    const memo = [...new Array(amount)];

    const dp = (a) => {
        if (a === 0) return 0;
        if (memo[a] !== undefined) return memo[a]

        memo[a] = Infinity
        for (let i = 0; i < n; i++) {
            if ((a - coins[i]) >= 0  && (a - coins[i]) < a) {
                memo[a] = Math.min(memo[a], 1 + dp(a - coins[i]))
            }
        }
        return memo[a];
    }
    let returnVal = dp(amount);
    return returnVal === Infinity ? -1 : returnVal
};