/**
 * @param {number[][]} points
 * @return {number}
 */
// Greedy
// Sorting
// Time: O(n * log(n))
var findMinArrowShots = function(points) {
    let arrows = 1, n = points.length;
    points.sort((a, b) => a[1] - b[1])
    let [x1, y1] = points[0]

    for (let i = 1; i < n; i++) {
        let [x, y] = points[i]
        
        if (y1 < x) {
            arrows++
            x1 = x; y1 = y
        }
    }

    return arrows;
};