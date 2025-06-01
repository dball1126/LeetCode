class Solution {
    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        var i = m-1; 
        var j: Int = n-1
        var idx = nums1.count - 1

        while i >= 0 || j >= 0 {
            if j < 0 {
                nums1[idx] = nums1[i];
                i -= 1;
            } else if i < 0 {
                nums1[idx] = nums2[j];
                j -= 1;
            } else if nums1[i] >= nums2[j] {
                nums1[idx] = nums1[i];
                i -= 1;
            } else if nums2[j] >= nums1[i] {
                nums1[idx] = nums2[j];
                j -= 1;
            }
            idx -= 1;
        }
    }
}