/**
 * State Var: i for nums1, j for nums2   ....end of arrays
 *            (stands for max length of repeated sub array)
 * Base Case: 0 if out of bounds
 * Recurrence Relation:
 *  for i of nums1
 *      for j of nums2
 *           if nums[i] === nums[j]
 *              if nums[i+1] === nums[j+1]
 *                  dp(i) = 1 + dp(i+1, j+1))
 *              else
 *                  dp(i) = 1 
 *           else
 *              dp(i) = 0
 * 
 * Time & Space: O(n*2)
 */
// Top Down
// var findLength = function(nums1, nums2) {
//     const memo = [...new Array(nums1.length+1)].map(a => [...new Array(nums2.length+1)].fill(-Infinity))
//     let max = 0;

//     const dp = (i, j) => {
//         if (i >= nums1.length || j >= nums2.length) return 0;
//         if (memo[i][j] !== -Infinity) return memo[i][j]
//         if (nums1[i] === nums2[j]) {
//             if (i+1 < nums1.length && j+1 < nums2.length && nums1[i+1] === nums2[j+1]) 
//                 return memo[i][j] = 1 + dp(i+1, j+1)
//             else
//                 return memo[i][j] = 1
//         }
//         return memo[i][j] = 0;
//     }

//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             max = Math.max(max, dp(i, j))
//         }
//     }
//     return max;
// }
// Bottom Up
var findLength = function(nums1, nums2) {
    const dp = [...new Array(nums1.length+1)].map(a => [...new Array(nums2.length+1)].fill(0))
    let max = 0;

    for (let i = nums1.length-1; i >= 0; i--) {
        for (let j = nums2.length-1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                if (i+1 < nums1.length && j+1 < nums2.length && nums1[i+1] === nums2[j+1])
                    dp[i][j] = 1 + dp[i+1][j+1]
                else
                    dp[i][j] = 1
            }
            max = Math.max(max, dp[i][j])
        }
    }
    return max
}
