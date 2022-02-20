/**
 * State Var: 
 *  i for idx of vowels ... end of vowels
 *  a for amount remaining
 * Base Case:
 *  1 if n = 0
 * Recurrence Relation:
 * dp[i] = 0
 *  for i of vowels
 *      dp[i] += dp(i, n-1)
 * 
 * return dp[i]
 * Time: O(n) = 5 * O(n) = O(n)
 * Space: O(1) (no overlapping sub problems)   
 */
// Top-Down
 var countVowelStrings = function(n) {
    const vowels = ['a','e','i','o','u']
    const dp = (i, a) => {
        if (a === 0) return 1;
        val = 0;
        for(let j = i; j < vowels.length; j++) {
            val += dp(j, a-1)
        }
        return val
    }
    return dp(0, n)
};