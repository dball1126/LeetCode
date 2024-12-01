/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m--; n--;
    let idx = nums1.length-1
    while (m >= 0 || n >= 0) {
        const v1 = m >= 0 ? nums1[m] : -Infinity;
        const v2 = n >= 0 ? nums2[n] : -Infinity;
        console.log("m: " + m + " v1: " + v1 + " n: " + n + " v2: " + v2)
        if (v1 >= v2) {
            [nums1[m], nums1[idx]] = [nums1[idx], nums1[m]]
            m--
        } else {
            [nums2[n], nums1[idx]] = [nums1[idx], nums2[n]]
            n--
        }
        idx--;
    }
};