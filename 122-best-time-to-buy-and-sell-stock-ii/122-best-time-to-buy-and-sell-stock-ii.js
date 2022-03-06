/**
 * State var: i for idx of prices  t for buying/selling
 *              (stands for maxProfit for that day .... end )
 * Base Case: 0 for out of bounds or t === 1 && i === prices.length-1
 * 
 */
// Top Down
 var maxProfit = function(prices, fee) {
    let memo = [...new Array(prices.length+1)].map(a => [...new Array(3)].fill(-Infinity))
    const dp = (i, t) => {
        if (i === prices.length-1 && t === 1 || i >= prices.length){
            return 0;
        }
        if (memo[i][t] !== -Infinity) return memo[i][t]
    
        if (t === 1) {
           return memo[i][t] = Math.max(dp(i+1,t),
                - prices[i] + dp(i+1, 0))
        } else {
            return memo[i][t] = Math.max(dp(i+1, t),
                prices[i] + dp(i+1, 1))
            
        }
    }
    return dp(0, 1)
};