class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int: Int]()

        for (idx, num) in nums.enumerated() {
            if let val = dict[target - num] {
                return [idx, val]
            }
            dict[num] = idx
        }
        return []
    }
}