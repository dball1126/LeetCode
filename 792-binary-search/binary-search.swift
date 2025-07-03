class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        var lo: Int = 0, hi: Int = nums.count-1

        while lo <= hi {
            var mid: Int = (hi + lo) / 2

            if nums[mid] == target {
                return mid
            } else if nums[mid] > target {
                hi = mid - 1
            } else {
                lo = mid + 1
            }
        }
        return (lo < nums.count && nums[lo] == target) ? lo : -1
    }
}