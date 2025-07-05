class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var ints: [[Int]] = intervals.sorted{$0[0] < $1[0]}, result: [[Int]] = []
        var x: Int = ints[0][0], y = ints[0][1]

        for i: Int in 1..<ints.count {
            if ints[i][0] > y {
                result.append([x, y])
                x = ints[i][0]; y = ints[i][1]
            } else {
                y = max(y, ints[i][1])
            }
        }
        result.append([x, y])
        return result
    }
}