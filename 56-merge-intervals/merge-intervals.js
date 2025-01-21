/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let lastIndex = 0;
    for (let i = 1; i < intervals.length; i++) {
        let [x, y] = intervals[i];
        let [prevX, prevY] = intervals[lastIndex];

        if (x <= prevY) {
            intervals[lastIndex][1] = Math.max(y, prevY);
        } else {
            lastIndex++;
            intervals[lastIndex] = intervals[i];
        }
    }
    while (intervals.length > lastIndex+1) intervals.pop();
    return intervals;
};