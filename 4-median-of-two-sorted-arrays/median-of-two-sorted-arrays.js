var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    let n = nums1.length, m = nums2.length;
    let left = 0, right = n;

    while (left <= right) {
        let partitionA = Math.floor((right + left) / 2);
        let partitionB = Math.floor((n + m + 1) / 2 - partitionA);

        let maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
        let maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
        let minLeftA = partitionA === n ? Infinity : nums1[partitionA];
        let minLeftB = partitionB === m ? Infinity : nums2[partitionB];

        if (maxLeftA <= minLeftB && maxLeftB <= minLeftA) {
            if ((n+m)% 2 === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minLeftA, minLeftB) ) / 2
            } else {
                return Math.max(maxLeftA, maxLeftB);
            }
        } else if (minLeftA > minLeftB) {
            right = partitionA - 1;
        } else {
            left = partitionA + 1;
        }
    }
};