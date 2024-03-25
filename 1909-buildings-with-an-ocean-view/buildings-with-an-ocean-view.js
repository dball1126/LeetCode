/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const stack = []
    const top = () => stack[stack.length-1]
    for (let i = 0; i < heights.length; i++) {
        
        while (stack.length && heights[top()] <= heights[i]) {
            stack.pop();
        }
        stack.push(i)
    }
    return stack;
};