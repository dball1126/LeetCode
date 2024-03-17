/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Merging arrays
// Time: O(n)
// Space: O(1)...not counting output array
var insert = function(intervals, newInterval) {
    let [x1, y1] = newInterval, merged = false;
    const arr = []
    for (let [x, y] of intervals) {
        if (merged) {
            arr.push([x, y])
            continue;
        }
        
        if (y1 < x) {
            arr.push([x1, y1]);
            arr.push([x, y])
            merged = true;
        } else if (((x1 >= x && x1 <= y ) || ( y1 >= x && y1 <= y)) ||
                    ((x >= x1 && x <= y1 ) || ( y >= x1 && y <= y1)))  {
            x1 = Math.min(x, x1)
            y1 = Math.max(y, y1)
        } else {
            arr.push([x, y])
        }

    }
    if (!merged) arr.push([x1, y1])
    return arr
};