/**
 * Sate var: i for idx of costs
 * Base case: 0 for out of bounds
 * Recurrence Relation:
 *  dp(n) = nums[i] + Math.min(dp(i-2), dp(i-1))
 */
// top down
 var minCostClimbingStairs = function(cost) {
    const memo = [...new Array(cost.length+1)].fill(Infinity)
    const dp = (i) => {
        if (i < 0) return 0
        if (memo[i] !== Infinity) return memo[i]
        memo[i] = cost[i] + Math.min(dp(i-1), dp(i-2))
        return memo[i]
    }
    dp(cost.length-1)
    console.log(memo)
    return Math.min(memo[cost.length-1], memo[cost.length-2])
};
// bottom up
// var minCostClimbingStairs = function(cost) {
//     if (cost.length === 2) return Math.min(cost[0], cost[1])

//     for (let i = 2; i < cost.length; i++) {
//         cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1])
//     }

//     return Math.min( cost[cost.length-1], cost[cost.length-2] )
// }