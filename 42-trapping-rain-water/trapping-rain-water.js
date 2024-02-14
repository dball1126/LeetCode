// Monotonic Stack
// Time and Space: O(n)
var trap = function(heights) {
    let max = 0, stack = [], n = heights.length

    for (let i = 0; i < n; i++) {
        if (stack.length && heights[stack[0]] <= heights[i]) {
            let maxVal = (i - stack[0]) * heights[stack[0]]

            while (stack.length) {
                maxVal -= heights[stack.pop()]
            }
            max += maxVal
        }
        stack.push(i)
    }


    while (stack.length) {

        while (stack.length >= 2 && heights[stack[stack.length-1]] < heights[stack[stack.length-2]]) {
            stack.pop()
        }
        let r = stack.pop()
        let l = -Infinity
        val = heights[r]
        
        while (stack.length && heights[stack[stack.length-1]] <= heights[r]) {
            val += heights[stack.pop()]
        }
        if (!stack.length) break

        l = stack[stack.length-1]
        let maxVal = ((r - l) * heights[r]) - val
        max += maxVal
    }

    return max
};