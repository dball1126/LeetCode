class Solution {
    func maxArea(_ height: [Int]) -> Int {
        var area: Int = 0
        var lo: Int = 0, hi = height.count - 1

        while lo < hi {
            var h = min(height[lo], height[hi]) 
            var w: Int = hi - lo
            area = max(area, h * w)
            height[lo] <= height[hi] ? (lo += 1) : (hi -= 1)
        }
        return area
    }
}