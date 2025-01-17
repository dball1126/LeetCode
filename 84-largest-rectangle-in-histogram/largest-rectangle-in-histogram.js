var largestRectangleArea = function(heights) {
    let maxArea = heights[0], stack = [-1], len = heights.length;
    let top = () => stack[stack.length-1];

    for (let i = 0; i < len; i++) {
        let curr = heights[i];
        maxArea = Math.max(maxArea, curr);
        while (top() !== -1 && heights[top()] >= curr) {
            let hIdx = stack.pop();
            let rWidth = i - hIdx;
            let lWidth = hIdx - top();
            maxArea = Math.max(maxArea, heights[hIdx] * (lWidth + rWidth - 1));
        }
        stack.push(i)
    }

    while (stack.length > 1) {
        let hIdx = stack.pop()
        let rWidth = len - hIdx;
        let lWidth = hIdx - top();
        maxArea = Math.max(maxArea, heights[hIdx] * (lWidth + rWidth - 1));
    }
    return maxArea;
};