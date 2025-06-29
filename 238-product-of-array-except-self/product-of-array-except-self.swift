class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        var leftPrefixSum: Int = 1, rightPrefixSum: Int = 1
        var leftSums: [Int] = nums.map{$0}
        var result: [Int] = nums.map{$0}
        for (i, v) in nums.enumerated() {
            leftPrefixSum *= v
            leftSums[i] = leftPrefixSum
        }

        for idx: Int in stride(from: nums.count-1, through: 0, by: -1) {
            var left: Int = idx > 0 ? leftSums[idx - 1] : 1
            result[idx] = left * rightPrefixSum
            rightPrefixSum *= nums[idx]
        }
        return result
    }
}