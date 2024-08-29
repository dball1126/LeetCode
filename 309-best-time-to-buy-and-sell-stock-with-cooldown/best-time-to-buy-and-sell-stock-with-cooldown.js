// Top-Down Dynamic Programming
// Time and Space: O(n)
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a => [...new Array(2)])

    const dp = (idx, t) => {
        if (idx >= prices.length && t === 0) return -Infinity
        if (idx >= prices.length && t === 1) return 0
        if (memo[idx][t] !== undefined) return memo[idx][t]
        
        let nx = dp(idx+1, t), nx2 = 0
        if (t === 1) {
            nx2 = dp(idx+1, 0) - prices[idx]
        } else {
            nx2 = dp(idx+2, 1) + prices[idx]
        }
        return memo[idx][t] = Math.max(nx, nx2);
    }
    return dp(0, 1)
};