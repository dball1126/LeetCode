/**
 * @param {number[]} prices
 * @return {number}
 */
// Bottom-Up Dynamic Programming
// Time and Space: O(n)
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+2)].map(a => [...new Array(4)].fill(0))

    for (let i = n-1; i >= 0; i--) {
        for(let c = 1; c >= 0;  c--) {
            if (c === 1) {
                memo[i][c] = Math.max(prices[i] + memo[i+2][0], memo[i+1][c])
            } else {
                memo[i][c] = Math.max(memo[i+1][1] + (-prices[i]), memo[i+1][c])
            }
        }
    }
    return memo[0][0]
}