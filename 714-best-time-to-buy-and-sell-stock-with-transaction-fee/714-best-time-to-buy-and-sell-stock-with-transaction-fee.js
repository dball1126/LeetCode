/**
 * Base cases 0 for for end of array h === 1 or out of bounds
 * State Var: i for day h for buying(1) selling(0)
 * Recurrence relation:
 *  if (buying)
 *      memo[i][h] = dp(i, 0) - prices[i]
 * if (selling)
 *  memo[i][h] = dp(i, 1) + prices[i] - fee
 * 
 * return Math.max( memo[i][h], dp(i+1, h))
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function(prices, fee) {
    let memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity))

    const dp = (i, h) => {
        if (i >= prices.length) {
            return 0;
        }
        if (memo[i][h] !== -Infinity) return memo[i][h]
        if (i === prices.length-1 && h === 1) return 0

        if (h === 1) {
            memo[i][h] = Math.max(dp(i+1, 0) - prices[i], -prices[i])
        } else {
            memo[i][h] = Math.max(dp(i+1, 1) + prices[i] - fee, prices[i] - fee)
        }

        return memo[i][h] = Math.max(memo[i][h], dp(i+1, h))
    }
    return dp(0, 1)
};