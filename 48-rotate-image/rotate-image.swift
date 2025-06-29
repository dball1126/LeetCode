class Solution {
    func rotate(_ matrix: inout [[Int]]) {
        var n: Int = matrix.count
        for r: Int in 0..<n {
            for c: Int in r..<n {
                var temp: Int = matrix[r][c]
                matrix[r][c] = matrix[c][r]
                matrix[c][r] = temp
            }
            var lo: Int = 0, hi = n-1
            while lo < hi {
                matrix[r].swapAt(lo, hi)
                lo += 1
                hi -= 1
            }
        }
    }
}