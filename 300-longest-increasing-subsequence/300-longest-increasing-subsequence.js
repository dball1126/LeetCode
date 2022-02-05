/**
 * State Var: i for idx of nums, j for previous idx removed
 * Base case: 0 for out of bounds
 * Recurrence relation:
 *  val = 0;
 *  if (i === j) val = 1
 *      if (nums[i] < nums[j]) 
 *          val = Math.max(1 + dp(i-1, i), dp(i-1, j))
 *      else 
 *          val += dp(i-1, j)
 * 
 * const doNothing = dp(i-1, j)
 * return val;
 * Time: O(1) + O(n) + O(n) = O(n)
 * Space: O(n*2)
 */

// top down
// top down
var lengthOfLIS = function(nums) {
    let memo = [...new Array(nums.length+1)].map(a => [...new Array(nums.length+1)].fill(-Infinity))
    let max = 1;

    const dp = (i, j) => {
        if (i < 0) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j]
        let val = 0;
        if (i === j) val = 1;

        if (nums[i] < nums[j]) {
            val = Math.max(1 + dp(i-1, i), dp(i-1, j))
        } else {
            val += dp(i-1, j)
        }

        // const doNothing = dp(i-1, j-1);
        return memo[i][j] = val;
    }
    for(let i = nums.length-1; i >= 0; i--) {
        dp(i,i)
    }
    memo.forEach(a => a.forEach(v => max = Math.max(max, v)))
    return max;
}