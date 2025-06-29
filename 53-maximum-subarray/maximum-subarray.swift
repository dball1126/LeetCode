class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var dp: [Int] = nums.map{$0}
        var maxSum: Int = dp[0]
        for i in 1..<dp.count {
            dp[i] = max(dp[i], dp[i] + dp[i-1])
            maxSum = max(maxSum, dp[i])
        }
        return maxSum
    }
}