class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var nums = intervals.sorted{$0[0] < $1[0]}
        var result: [[Int]] = [], x = nums[0][0], y = nums[0][1]

        for i in 1..<nums.count {
            var currX = nums[i][0], currY = nums[i][1]
            if currX > y {
                result.append([x, y])
                x = currX; y = currY
            } else {
                y = max(y, currY)
            }
        }
        result.append([x, y])
        return result
    }
}