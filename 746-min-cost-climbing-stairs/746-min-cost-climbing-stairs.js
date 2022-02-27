/**
 * State Var: i for idx of costs ... end of costs
 * Base Case: 0 for out of bounds. dp[0] = costs[0], dp[1] = costs[1]
 * Recurrence Relation:
 *  dp[i] = Math.min(dp[i] + dp[i-1], dp[i] + dp[i-2])
 */
// Top Down
//  var minCostClimbingStairs = function(costs) {
//     const memo = [...new Array(costs.length+1)].fill(Infinity);
//     memo[0] = costs[0];
//     memo[1] = costs[1];

//     const dp = (i) => {
//         if ( i >= costs.length) return 0;
//         if (memo[i] !== Infinity) return memo[i]
//         return memo[i] = Math.min(costs[i] + memo[i-1], costs[i] + memo[i-2]);
//     }
//     for(let i = 2; i < costs.length; i++) {
//         dp(i)
//     }
//     return Math.min(memo[costs.length-1], memo[costs.length-2])
// }
// Bottom up
var minCostClimbingStairs = function(costs) {
    const dp = [...new Array(costs.length+1)].fill(Infinity);
    dp[0] = costs[0];
    dp[1] = costs[1];
    for (let i = 2; i < costs.length; i++) {
        dp[i] = Math.min(costs[i] + dp[i-1], costs[i] + dp[i-2]);
    }
    return Math.min(dp[costs.length-1], dp[costs.length-2])
}