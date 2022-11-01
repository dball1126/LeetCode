/**
 * shift bits to the right until both inputs are zero
 * Time and Space: O(1)...32 bits max
 */
 var hammingDistance = function(x, y) {
     if (x === y) return 0
    let distance = 0;
    while (x !== 0 || y !== 0) {
        if ((x & 1) !== (y & 1)) {
            distance++
        }
        x >>= 1
        y >>= 1
    }
    return distance
};