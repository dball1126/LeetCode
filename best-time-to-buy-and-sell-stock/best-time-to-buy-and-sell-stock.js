/**
 *  State Var: 
 *      i for idx of prices .... end of prices
              (i stands for max profit between these days)
    Base Case:
        0 for index out of bounds
    Recurrence Relation:
        dp(i) = 0
        
        for i in prices
            for (j = i+1 in prices)
                dp(i) = Math.max(prices[j] - prices[i])
                
    Time: O(n)
    Space: O(n)
 */ 
// Top Down
var maxProfit = function(prices) {
    const memo = [...new Array(prices.length+1)].fill(-Infinity)
    let max = 0;
    
    const dp = (i) => {
        if (i >= prices.length)
            return 0;
        if (memo[i] !== -Infinity) 
            return memo[i]

        memo[i] = 0;
        memo[i] = Math.max(prices[i], dp(i+1))
        console.log("returning from memo")
        return memo[i];
    }
    for (let i = 0; i < prices.length; i++) {
        max = Math.max(max, dp(i+1) - prices[i])
    }
    return max
}