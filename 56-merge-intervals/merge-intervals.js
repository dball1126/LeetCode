/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let x1, y1, result = []

    for (let [x, y] of intervals) {

        if (x1 === undefined) {
            x1 = x, y1 = y
        } else if (y1 >= x) {
            x1 = Math.min(x1, x), y1 = Math.max(y, y1)
        } else {
            result.push([x1, y1])
            x1 = x, y1 = y
        }

    }
    if (x1 !== undefined) result.push([x1, y1])
    return result;
};