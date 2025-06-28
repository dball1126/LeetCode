class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
        if k == 0 || nums.count <= 1 || k == nums.count { return }
        let k = k % nums.count

        if k != nums.count { 
            var lo = 0, hi = nums.count - k -  1
            reverseNums(&nums, &lo, &hi)
            lo = nums.count - k; hi = nums.count - 1
            reverseNums(&nums, &lo, &hi)
            lo = 0; hi = nums.count - 1
            reverseNums(&nums, &lo, &hi)
         }  
    }
    func reverseNums(_ n: inout [Int], _ lo: inout Int, _ hi: inout Int) -> Void {
        while lo < hi {
            n.swapAt(lo, hi)
            lo += 1
            hi -= 1
        }
    } 
}