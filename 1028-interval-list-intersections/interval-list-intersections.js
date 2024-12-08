/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// Merging intervals
// Time: O(n + m)
// Space: O(1)...if we don't count the output result array
var intervalIntersection = function(list1, list2) {
    if (!list1.length || !list2.length) return [];
    let result = [], idx1 = 0, idx2 = 0

    while (idx1 < list1.length && idx2 < list2.length) {
        let val1x = Infinity, val1y = Infinity, val2x = Infinity, val2y = Infinity
        if (idx1 < list1.length) {
            [val1x, val1y] = list1[idx1]
        }
        if (idx2 < list2.length) {
            [val2x, val2y] = list2[idx2]
        }
        if (val1x >= val2x && val1x <= val2y || val2x >= val1x && val2x <= val1y) {
            result.push([Math.max(val1x, val2x), Math.min(val1y,val2y)])
        }
        if (val2y <= val1y) {
            idx2++
        } else {
            idx1++
        }
    }
    return result
};