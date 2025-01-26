var containsNearbyDuplicate = function(nums, k) {
    if (k === 0) return false
    let set = new Set();
    let lo = 0, hi = 0;
    while (hi < nums.length) {
        if (set.has(nums[hi])) return true;
        
        if (hi - lo >= k) {
            set.delete(nums[lo]);
            lo++;
        }
        set.add(nums[hi]);
        hi++;
    }
    return false;
};