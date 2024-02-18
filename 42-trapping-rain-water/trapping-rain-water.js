/**
 * @param {number[]} height
 * @return {number}
 */
// Monotonic Stack
// Time and Space: O(n)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
    let result = 0, stack = [], i = 0, n = heights.length
    const top = () => stack[stack.length-1]
    while (i < n) {

        if (stack.length && heights[top()] <= heights[i]) {
            let middle = stack.pop()
            if (!stack.length) continue;
            let minHeight = Math.min(heights[top()], heights[i]) - heights[middle]

            result += ((i - top() - 1) * minHeight )
        } else {
            stack.push(i);
            i++;
        }
    }
    
    return result;
};