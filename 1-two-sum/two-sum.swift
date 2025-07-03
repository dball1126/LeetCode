class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var numMap:[Int:Int] = [:]

        for (i, n) in nums.enumerated() {
            if var idx = numMap[target - n] {
                return [idx, i]
            }
            numMap[n] = i
        }
        return []
    }
}