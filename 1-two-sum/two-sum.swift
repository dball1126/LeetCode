class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var numMap:[Int:Int] = [:]
        
        for (i, v) in nums.enumerated() {
            if var idx = numMap[target - v] {
                return [idx, i]
            }
            numMap[v] = i
        }
        return []
    }
}