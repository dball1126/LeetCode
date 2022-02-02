/**
 * State Var: i and j for idx's of both inputs
 * Base case: 0 for out of bounds
 * Recurrence Relation: 
 *  dp(i, j) = 0
 *  if s1[i] === s2[j]
 *      dp(i, j) = 1 + dp(i+1, j+1)
 *  else 
 *      dp(i, j) = Math.max(dp(i+1, j), dp(i, j+1))
 * Space: O(n)
 * Time: O(1) + n * m = O(n * m)
 */
// bottom up

var longestCommonSubsequence = function(s, t) {
    let len = Math.max(s.length, t.length)
    const dp = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(0))

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                dp[i][j] += 1
                if (dp[i-1] && dp[i-1][j-1]) {
                    dp[i][j] += dp[i-1][j-1]
                }
            } else {
                let [v1, v2] = [0, 0]
                if (dp[i-1] && dp[i-1][j]) v1 = dp[i-1][j]
                if (dp[j-1] && dp[i][j-1]) v2 = dp[i][j-1]
                dp[i][j] = Math.max(v1, v2)
            }
        }
        
    }
    return dp[s.length-1][t.length-1]
}