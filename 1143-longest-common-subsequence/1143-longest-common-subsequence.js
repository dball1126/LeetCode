/**
 * State Var: i and j for idx's of both inputs
 * Base case: 0 for out of bounds
 * Recurrence Relation: 
 *  dp(i, j) = 0
 *  if s1[i] === s2[j]
 *      dp(i, j) = 1 + dp(i+1, j+1)
 *  else 
 *      dp(i, j) = Math.max(dp(i+1, j), dp(i, j+1))
 */
// top down
var longestCommonSubsequence = function(s, t) {
    let len = Math.max(s.length, t.length)
    const memo = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(-Infinity))
    const dp = (i, j) => {
        if (i >= s .length || j >= t.length) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j];
        memo[i][j] = 0;
        if (s[i] === t[j]) {
            memo[i][j] = 1 + dp(i+1, j+1)
        } else {
            memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1))
        }
        return memo[i][j];
    }
    return dp(0,0)
}