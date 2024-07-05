/**
 * @param {number[]} height
 * @return {number}
 */
// Two-Pointer technique
// Time: O(n)
// Space: O(1)
var maxArea = function(height) {
    let s = 0, e = height.length-1
    let max = 0
    while (s < e) {

        max = Math.max(max, Math.min(height[s], height[e]) * (e - s))
        if (height[s] > height[e]) {
            e--
        } else {
            s++
        }
    }
    return max
};