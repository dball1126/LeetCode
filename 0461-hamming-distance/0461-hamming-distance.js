/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/**
 * Time and Space: O(1)...32 bits max
 */
 var hammingDistance = function(x, y) {
     if (x === y) return 0
    let distance = 0;
    for (let i = 0; i < 32; i++) {
        let mask = 1 << i;
        if ((x & mask) !== (y & mask)) distance++;
    }
    return distance
};