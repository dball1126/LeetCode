/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a =>
                 [...new Array(3)].map(a =>
                 [...new Array(3)]))
    
    const dp = (idx, state, amt) => {
        if (idx >= n) return 0
        if (memo[idx][state][amt] !== undefined) return memo[idx][state][amt]
        if (amt <= 0) return 0
        let v1 = dp(idx+1, state, amt), v2 = 0

        if (state === 1) {
            v2 = dp(idx+1, 0, amt) - prices[idx]
        } else {
            v2 = dp(idx+1, 1, amt - 1) + prices[idx]
        }
        return memo[idx][state][amt] = Math.max(v1,v2)
    }
    return dp(0,1,2)
};