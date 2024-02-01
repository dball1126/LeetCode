/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    while (a & b) {
        let reamining = a ^ b;
        b = ((a & b) << 1)
        a = reamining;
    }
    return a ^ b;
};