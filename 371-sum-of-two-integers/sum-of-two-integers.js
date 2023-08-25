/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    while ((a & b) !== 0) {
        let tempB = a ^ b
        a = (a & b) << 1
        b = tempB
    }
    return a ^ b
};