class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maxSum: Int = nums[0], currSum: Int = nums[0]
        for i in 1..<nums.count {
            currSum = max(nums[i], nums[i] + currSum)
            maxSum = max(maxSum, currSum)
        }
        return maxSum
    }
}