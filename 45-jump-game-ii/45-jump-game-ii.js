
/**
 * State Var: i for idx of nums ... end of nums
 *  (stands for min jumps to end)
 * Base Case: nums[i] + i >= nums.length-1  return 1
 * Recurrence Relation:
 *  for n = i + 1 of nums[i]+i
 *      dp(i) = Math.min(dp(i), 1 + dp(n))
    
    Time  & Space: O(n)
*/
var jump = function(nums) {
    if (nums.length === 1) return 0
    const memo = [...new Array(nums.length+1)].fill(Infinity)
    
    const fillDP = (i) => {
        if (nums[i] + i >= nums.length-1) return 1;
        if (memo[i] !== Infinity) return memo[i];
        
        for (let n = i+1; n <= nums[i] + i; n++) {
            memo[i] = Math.min(memo[i], 1 + fillDP(n))
        }
        return memo[i]
    }
    return fillDP(0)
}