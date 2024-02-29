/**
 * @param {number[]} heights
 * @return {number[]}
 */
// Monotonic Stack
// Time: O(n)
// Space: O(n)
// Monotonic Stack
// Time: O(n)
// Space: O(n)
function canSeePersonsCount(heights) {
  let n = heights.length, result = heights.map(a => 0), stack = []
  const top = () => stack[stack.length-1]

  for (let i = 0; i < n; i++) {
    
      while (stack.length && heights[top()] <= heights[i]) {
        let idx = stack.pop()
        result[idx]++
      }
      if (stack.length) {
        result[top()]++
      }
      stack.push(i)
  }

  return result
};