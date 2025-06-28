class Solution {
    func productExceptSelf(_ nums: [Int]) -> [Int] {
        var n: [Int] = nums
        var prefixSums: [Int] = Array(repeating: 0, count: nums.count)
        var prefixSum: Int = 1
        for (i, v) in n.enumerated() {
            prefixSum *= v
            prefixSums[i] = prefixSum
        }
        var i: Int = n.count - 1
        prefixSum = 1
        while i >= 0 {
            let leftSum: Int = i > 0 ? prefixSums[i - 1] : 1
            var temp = prefixSum * n[i]
            n[i] = leftSum * prefixSum
            prefixSum = temp
            i -= 1
        }
        return n
    }
}