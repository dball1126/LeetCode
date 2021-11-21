/**
 * Use Sliding Window Technique.
 * Use map and size of it to compare to K.
 * Time Complexity: O(2n) = O(n)
 * Space Complexity: O(k) map's size will be based on k elements.
 */
var lengthOfLongestSubstringKDistinct = function(str, k) {
    let [s,e,result,map] = [0,0,0,new Map()]
   
    while (e < str.length) { // Start sliding e pointer right
        let c = str[e];
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c) + 1)

        if (map.size <= k) { // handle result
            result = result < (e - s + 1) ? (e - s + 1) : result
        }

        while (map.size > k) { // invalid state. Start sliding s pointer right
            c = str[s]
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) map.delete(c)
            s++;
        }
        e++;
    }
    return result;
};