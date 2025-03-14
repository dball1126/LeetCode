class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int: Int]()

        for (idx, number) in nums.enumerated() {
            if let v1 = dict[target - number] {
                return [idx, v1]
            }
            dict[number] = idx
        }
        return []
    }
}