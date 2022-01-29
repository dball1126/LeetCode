/**
 * State Var: i for idx of nums
 * Base Case: 0 for out of bounds
 * Recurrence Relation: 
 *  nums[nums.length-1] = Math.max(nums[i] + dp(i-2), dp(i-1))
 * Time: O(n) + O(1) = O(n)
 * Space: O(1)
 */
// top down
// var rob = function(nums) {
//     if (nums.length === 1) return nums[0]
//     let memo = [...new Array(nums.length+1)].fill(-Infinity)
//     memo[1] = Math.max(nums[1], nums[0])

//     const dp = (i) => {
//         if (i < 0 || i >= nums.length) return 0;
//         if (memo[i] !== -Infinity) return memo[i]
//         memo[i] = Math.max(nums[i] + dp(i-2), dp(i-1))
//         return memo[i]
//     }
//     return dp(nums.length-1)
// };
// bottom up
var rob = function(nums) {
    if (nums.length === 1) return nums[0]
   nums[1] = Math.max(nums[0], nums[1])
   for (let i = 2; i < nums.length; i++) {
       nums[i] = Math.max(nums[i] + nums[i-2], nums[i-1])
   }
   return nums[nums.length-1]
}