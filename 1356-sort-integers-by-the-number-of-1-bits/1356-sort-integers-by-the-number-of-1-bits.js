/**
 * sort and bit manipulation
 * Time O(n * log(n)) (sorting...counting bits is O(1) since there are only 32 to worry about)
 * Space: O(1)
 */
 var sortByBits = function(arr) {
    arr.sort((a,b) => a-b);
    const countOneBits = (n) => {
        let count = 0;
        while (n !== 0) {
            if (n & 1 === 1) count++
            n >>= 1;
        }
        return count;
    }
     return arr.sort((a, b) => countOneBits(a) - countOneBits(b))
};