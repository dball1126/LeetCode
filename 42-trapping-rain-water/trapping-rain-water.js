/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
    
    let water = 0, stack = [];
    const top = () => stack[stack.length-1];

    for (let i = 0; i < heights.length; i++) {
        
        while (stack.length && heights[top()] <= heights[i]) {
            let h = heights[stack.pop()];
            if (!stack.length) break;
            let diff = Math.min(heights[top()], heights[i])
            let newHeight = (diff - h)
            let w = i - top() - 1;
            let currentWater = newHeight * w;
            water += currentWater;
        }
        stack.push(i);
    }

    return water;
};