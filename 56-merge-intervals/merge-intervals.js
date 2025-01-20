var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a,b) => a[0] - b[0]);
    const result = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        let [x, y] = intervals[i];
        let [prevX, prevY] = result[result.length-1];
        
        if (x <= prevY) {
            result[result.length-1][1] = Math.max(y, prevY);
        } else {
            result.push([x,y])
        }
    }
    return result;
};