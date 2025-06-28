class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        let nums = nums.sorted{$0 < $1}
        var result: [[Int]] = []
        var i: Int = 0
        while i < (nums.count - 2) {
            var j: Int = i + 1, k: Int = nums.count - 1

            while j < k {
                var sum: Int = nums[i] + nums[j] + nums[k]

                if sum == 0 {
                    result.append([nums[i], nums[j], nums[k]])
                }
                if sum >= 0 {
                    while k > 0 && nums[k-1] == nums[k] { k -= 1 }
                    k -= 1
                } else {
                    while j < nums.count-1 && nums[j+1] == nums[j] { j += 1 }
                    j += 1
                }
            }
            while i < nums.count-1 && nums[i+1] == nums[i] { i += 1 }
            i += 1
        }
        return result;
    }
}