/**
 * Time: O(m) m = b
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