/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    const memo = [...new Array(n+1)].map(a => [...new Array(3)])

    const dp = (idx, state) => { // state = 1 for buy and 0 for sell
        if (idx >= n) return 0
        if (idx === n-1) {
            if (state === 1) return 0
            return prices[idx]
        }
        if (memo[idx][state] !== undefined) return memo[idx][state]
        let next = dp(idx+1, state)
        let v = 0
        if (state === 1) {
            v = dp(idx+1, 0) - prices[idx]
        } else {
            v = dp(idx+2, 1) + prices[idx]
        }
        return memo[idx][state] = Math.max(next, v)
    }
    return dp(0, 1)
};