/**
 * @param {number[]} heights
 * @return {number[]}
 */
// Monotonic Stack
// Time and Space: O(n)
var findBuildings = function(heights) {
    let stack = []
    const top = () => stack[stack.length-1]
    heights.forEach((v, i) => {
        while (stack.length && heights[top()] <= v) {
            stack.pop()
        }
        stack.push(i)
    })
    return stack
};
