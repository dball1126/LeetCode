class Solution {
    func rotate(_ matrix: inout [[Int]]) {
        for r: Int in 0..<matrix.count {
            for c: Int in r..<matrix.count {
                var temp: Int = matrix[r][c]
                matrix[r][c] = matrix[c][r]
                matrix[c][r] = temp
            }
            var lo = 0
            var hi: Int = matrix.count 
            hi -= 1
            while lo < hi {
                matrix[r].swapAt(lo, hi)
                lo += 1
                hi -= 1
            }
        }
    }
}