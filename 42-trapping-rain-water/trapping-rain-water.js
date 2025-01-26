var trap = function(height) {
    let stack = [], totalArea = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] >= height[stack[stack.length-1]]) {
            let mid = stack.pop();
            if (!stack.length) break;
            let left = stack[stack.length-1];
            let maxHeight = Math.min(height[left],height[i]) - height[mid];

            totalArea += maxHeight * (i - left - 1);
        }
        stack.push(i);
    }
    return totalArea
};