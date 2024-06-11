/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = -Infinity, maxEle, map = new Map()
    
    for (let n of nums) {
        if (!map.has(n)) map.set(n, 0)
        map.set(n, map.get(n) + 1)

        if (map.get(n) > max) {
            max = map.get(n)
            maxEle = n;
        }
    }

    return maxEle
};
