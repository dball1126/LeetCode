class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maxSub: Int = nums[0]
        var currSub: Int = nums[0]
        for i in 1..<nums.count {
            var n: Int = nums[i]
            currSub = max(n, n + currSub)
            maxSub = max(maxSub, currSub)
        }
        return maxSub
    }
}