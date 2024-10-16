/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// State Machine DP Pattern
// Top-Down Dynamic Programming
// Time & Space: O(n * k)...n for length of prices
var maxProfit = function(k, prices) {
    let n = prices.length
    const memo = [...new Array(n+1)].map(a => 
                [...new Array(3)].map(a => 
                [...new Array(k+1)]))

    const dp = (idx, ste, amt) => {
        if (idx >= n || amt >= k) return 0
        if (idx === n-1) {
            if (ste === 1) return 0
            return prices[idx]
        }
        if (memo[idx][ste][amt] !== undefined) {
            return memo[idx][ste][amt]
        }

        let nx = dp(idx+1, ste, amt)
        let nx2 = 0
        if (ste === 1) {
            nx2 = dp(idx+1, 0, amt) - prices[idx]
        } else {
            nx2 = dp(idx+1, 1, amt+1) + prices[idx]
        }
        return memo[idx][ste][amt] = Math.max(nx, nx2)
    }
    return dp(0,1, 0)
};