 var maxProfit = function(prices) {
    const memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity))

    const dp = (i, t) => {
        if (i >= prices.length) return 0;
        if (t === 1 && i >= prices.length-1) return 0;
        if (memo[i][t] !== -Infinity) return memo[i][t]

        if (t === 1) {
            memo[i][t] = dp(i+1, 0) - prices[i]
        } else {
            memo[i][t] = Math.max(dp(i+2, 1) + prices[i])
        }
        return memo[i][t] = Math.max(dp(i+1, t), memo[i][t])
    }
    return dp(0, 1)
};