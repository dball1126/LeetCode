class Solution {
    func merge(_ intervals: [[Int]]) -> [[Int]] {
        var ints: [[Int]] = intervals.sorted{$0[0] < $1[0]}
        var x = ints[0][0], y = ints[0][1], result: [[Int]] = []
        for i in 1..<ints.count {
            var cx: Int = ints[i][0], cy: Int = ints[i][1]
            if cx > y {
                result.append([x, y])
                x = cx; y = cy;
            } else {
                y = max(y, cy)
            }
        }
        result.append([x, y])
        return result
    }
}