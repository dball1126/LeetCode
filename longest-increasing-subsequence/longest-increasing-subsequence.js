/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let max = 1;
    let dp = nums.map(a => 0)
    const fillDP = (i) => {
        if (i === 0) return 1;
        if (dp[i] > 0) return dp[i]
        let val = 1;
        for (let s = i-1; s >= 0; s--) {
            if (nums[i] > nums[s]) {
                val = Math.max(1 + fillDP(s), val)
                // console.log("VAL: " + val)
            }
        }
        dp[i] = Math.max(dp[i], val)
        max = Math.max(max, val)
        return dp[i]
    }
    for (let j = nums.length-1; j >= 0; j--) {
        fillDP(j)
    }
    // console.log(dp)
    return max
}