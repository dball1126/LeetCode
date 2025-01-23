/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();
    for (let c of s) {
        if (!map.has(c)) map.set(c, 0);
        map.set(c, map.get(c) + 1);
    }
    let result = "";
    for (let c of order) {
        if (map.has(c)) {
            while (map.get(c) > 0) {
                result += c
                map.set(c, map.get(c) - 1);
            }
            map.delete(c);
        }
    }
    for (let [k, v] of map) {
        while (v > 0) {
            result += k
            v--
        }
    }
    return result;
};