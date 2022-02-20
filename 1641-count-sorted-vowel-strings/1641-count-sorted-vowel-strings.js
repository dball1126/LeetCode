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
 * Time: O(n) = 5 * O(n)  = O(n)
 * Space: O(n) = 5 * O(n)  = O(n)     
 */
// Top-Down
 var countVowelStrings = function(n) {
    const vowels = ['a','e','i','o','u']
    const memo = [...new Array(vowels.length+1)].map(a => [...new Array(n+1)].fill(-Infinity))
    const dp = (i, a) => {
        if (a === 0) return 1;
        if (memo[i][a] !== -Infinity) return memo[i][a]
        memo[i][a] = 0;

        for(let j = i; j < vowels.length; j++) {
            memo[i][a] += dp(j, a-1)
        }
        return memo[i][a]
    }
    return dp(0, n)
};