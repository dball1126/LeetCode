/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Time and Space: O(n)
var dailyTemperatures = function(temps) {
    let stack = []
    let result = temps.map(a => 0)
    for (let i = 0; i < temps.length; i++) {
        while (stack.length && temps[stack[stack.length-1]] < temps[i]) {
            let idx = stack.pop()
            result[idx] = i - idx
        }
        stack.push(i)
    }
    return result 
};