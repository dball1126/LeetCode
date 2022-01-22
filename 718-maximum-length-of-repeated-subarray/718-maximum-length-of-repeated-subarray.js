/**
 * State var: i and j for the idx of the two input arrays
 * Base Case: 0 for out of bounds
 * Recurrence Relation: 
 *  if (nums1[i] === nums2[j])
 *      memo[i][j] = 1 + dp(i+1, j+1)
 *  else 
 *      memo[i][j] = 0
 */
var findLength = function(nums1, nums2) {
    let [len, max] = [Math.max(nums1.length, nums2.length), 0];
    let memo = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(-Infinity))

    const dp = (i, j) => {
        if (i >= len || j >= len) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j]
        memo[i][j] = 0;
        if (nums1[i] === nums2[j]) {
            memo[i][j] = 1 + dp(i+1, j+1)
        }
        dp(i+1, j)
        dp(i, j+1)
        max = Math.max(max, memo[i][j])
        return memo[i][j]
    }
    dp(0,0)
    return max;
};
