/**
 * Time: O(1) -1000 and 1000 only have 32 bits
 * Space: O(1)
 */
var getSum = function(a, b) {
    if (a === 0 || b === 0) return a ^ b;
    while (b !== 0) {
        let temp = a;
        a ^= b
        b &= temp
        if (b !== 0) b <<=1
    }   
    return a; 
};