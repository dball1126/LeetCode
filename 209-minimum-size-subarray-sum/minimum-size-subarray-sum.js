// Sliding Window
// Time: O(n)
// Space: O(1)
var minSubArrayLen = function(target, nums) {
    let s = 0, e = 0, sum = 0, minLen = Infinity;
    while (e < nums.length) {
        sum += nums[e];
        while (sum >= target && s <= e) {
            minLen = Math.min(minLen, e - s + 1);
            sum -= nums[s];
            s++;
        }
        e++;
    } 
    return minLen === Infinity ? 0 : minLen;
};