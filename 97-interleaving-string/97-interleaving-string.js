/**
 * State Var: i, j, k for s1, s2, s3 indexs ....end of string
 *          (stands for if the substring is interleaving)
 * Base Case: if i && j && k === s1.length && s2.length && s3.length
 *                  return true
 * Recurrence Relation:
 *      if (s1[i] === s3[k] && s2[j] === s3[k]) {
            return memo[i][j] = dp(i+1, j, k+1) || dp(i, j+1, k+1)
        } else if (s1[i] === s3[k]) {
            return memo[i][j] = dp(i+1, j, k+1)
        } else if (s2[j] === s3[k]) {
            return memo[i][j] = dp(i, j+1, k+1)
 */
// Top Down
var isInterleave = function(s1, s2, s3) {
    const memo = [...new Array(s1.length+1)].map(a => [...new Array(s2.length+1)].fill(undefined))
    
    const dp = (i, j, k) => {
        if (i >= s1.length && j>= s2.length && k >= s3.length) return true;
        if (i >= s1.length && j >= s2.length && k < s3.length) return false
        if (k >= s3.length && (i>= s1.length || j>= s2.length)) return false
        if (memo[i] !== undefined && memo[i][j] !== undefined) return memo[i][j]

        if (s1[i] === s3[k] && s2[j] === s3[k]) {
            return memo[i][j] = dp(i+1, j, k+1) || dp(i, j+1, k+1)
        } else if (s1[i] === s3[k]) {
            return memo[i][j] = dp(i+1, j, k+1)
        } else if (s2[j] === s3[k]) {
            return memo[i][j] = dp(i, j+1, k+1)
        } else {
            return memo[i][j] = false;
        }
    }
    return dp(0,0,0)
};