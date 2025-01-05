// Sort and Sliding Window
// Time: O(n * log(n))...due to sorting
// Space: Olog(n)...due to sorting
var maxFrequency = function(nums, k) {
    if (nums.length <= 1) return 1;
    let s = 0, e = 0, cnt = 0, max = 1;
    nums.sort((a,b) => a - b);
    while (e < nums.length) {
        if (e + 1 >= nums.length) {
            return Math.max(max, e - s + 1);
        }
        max = Math.max(max, e - s + 1);
        while (((nums[e+1] - nums[e]) * (e - s + 1) + cnt) > k && s <= e) {
            if (s === e) {
                s++;
            } else {
                cnt -= (nums[e] - nums[s]);
                s++;
            }
        }
        if (s !== e) {
            cnt += ((nums[e+1] - nums[e]) * (e - s + 1));
        }
        e++;
    }
    return max;
};